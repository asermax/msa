// @flow
import type { State } from 'data/types'
import type { Product, ProductsById } from 'data/product/types'
import type { OrderProducts, OrderProduct, Order, OrdersById } from './types'
import * as R from 'ramda'
import  { createSelector } from 'reselect'
import createCachedSelector from 're-reselect'
import { getQuery } from 'data/route/selectors'
import { getProductsById } from 'data/product/selectors'
import { orderSchema } from './schemas'

// helpers
const calculateOrderTotal = (products: ProductsById, orderProducts: OrderProducts): number =>
  R.compose(
    R.sum,
    R.values,
    R.evolve( // create an evolve object that multiplies by the product price
      R.map<Product, (number) => number, any>(
        R.compose(
          R.multiply,
          R.prop('price'),
        ),
      )(products),
    ),
  )(orderProducts)

// orden creation
export const getCurrentOrderUser = R.path([ 'order', 'user' ])
export const getCurrentOrderOrganization = createSelector(
  [ getQuery ],
  R.prop('org'),
)
export const getCurrentOrderProducts: (State) => OrderProducts = R.compose(
  R.prop('products'),
  R.prop('order'),
)
export const getCurrentOrderProductsIds: (State) => Array<string> = createSelector(
  [ getCurrentOrderProducts ],
  R.keys,
)
export const getCurrentOrderProductAmount: (State, number) => number =
  createCachedSelector<State, any, OrderProducts, number>(
    [
      R.nthArg(1), // product id
      getCurrentOrderProducts, // product map
    ],
    R.propOr(0), // receives (id, productMap), returns amount or 0
  )(R.nthArg(1))  // memoize by id
export const getCurrentOrderTotal = createSelector(
  [
    getProductsById,
    getCurrentOrderProducts,
  ],
  calculateOrderTotal,
)
export const isOrderValid = createSelector(
  [ getCurrentOrderUser, getCurrentOrderOrganization, getCurrentOrderProducts ],
  R.compose(
    R.bind(orderSchema.isValidSync, orderSchema),
    R.unapply(
      R.zipObj([ 'user', 'organization', 'products' ]),
    ),
  ),
)

// general
export const getOrdersIds = R.compose(R.prop('ids'), R.prop('order'))
export const getOrdersById = R.compose(R.prop('byId'), R.prop('order'))
export const getOrder: (state: State, id: string) => Order =
  createCachedSelector<State, any, OrdersById, Order>(
    [
      R.nthArg(1), // order id
      getOrdersById, // orders map
    ],
    R.prop, // return the order id from the map
  )(R.nthArg(1)) // cache by order id
export const getOrderProducts: (state: State, id: string) => OrderProducts =
  createCachedSelector<State, string, Order, OrderProducts>(
    [
      getOrder, // order for id
    ],
    R.compose(
      R.map<OrderProduct, number, any>(R.prop('amount')),
      R.indexBy(R.prop<any, OrderProduct>('product')), // index by the product id
      R.prop('products'), // get the products from the order
    ),
  )(R.nthArg(1))
export const getOrderTotal: (state: State, id: string) => number = createCachedSelector(
  [
    getProductsById,
    getOrderProducts,
  ],
  calculateOrderTotal, // calculate the total
)(R.nthArg(1)) // cache by order id
export const getOrdersTotal = (state: State): number => R.compose(
  R.sum, // sum all orders together
  R.map(R.partial(getOrderTotal, [ state ])), // calculate the total for each order
)(getOrdersIds(state))

export const getOrdersProducts = (state: State): Array<OrderProducts> => R.compose(
  R.map(R.partial(getOrderProducts, [ state ])), // get the products for all the orders
)(getOrdersIds(state))
export const getOrdersWholeProducts: (state: State) => OrderProducts = createSelector(
  [
    getOrdersProducts,
  ],
  R.compose(
    R.reduce(R.mergeWith(R.add), {}), // sum all values
    R.map(R.map<number, number, any>(Math.floor)), // get only the integer part
  ),
)
export const getOrdersWholeProductAmount: (state: State, id: string) => number =
  createCachedSelector<State, string, any, OrderProducts, number>(
    [
      R.nthArg(1),
      getOrdersWholeProducts,
    ],
    R.propOr(0),
  )(R.nthArg(1))

export const getOrdersFractionalProducts: (state: State) => OrderProducts = createSelector(
  [
    getOrdersProducts,
  ],
  R.compose(
    R.reduce(R.mergeWith(R.add), {}),
    R.map<OrderProducts, OrderProducts>(R.map<number, number, any>(R.compose(
      Math.ceil, // round up
      R.flip(R.modulo)(1), // remove the integer part
    ))),
  ),
)
export const getOrdersFractionalProductAmount: (state: State, id: string) => number =
  createCachedSelector<State, string, any, OrderProducts, number>(
    [
      R.nthArg(1),
      getOrdersFractionalProducts,
    ],
    R.propOr(0),
  )(R.nthArg(1))
