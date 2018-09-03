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

export const getCurrentOrderUser = R.path([ 'order', 'user' ])
export const getCurrentOrderOrganization = createSelector(
  [ getQuery ],
  R.prop('org'),
)
export const getCurrentOrderProducts: (State) => OrderProducts = R.path([ 'order', 'products' ])
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
export const getOrdersIds = R.path([ 'order', 'ids' ])
export const getOrdersById = R.path([ 'order', 'byId' ])
export const getOrder: (State, number) => Order =
  createCachedSelector<State, any, OrdersById, Order>(
    [
      R.nthArg(1), // order id
      getOrdersById, // orders map
    ],
    R.prop, // return the order id from the map
  )(R.nthArg(1)) // cache by order id
export const getOrderTotal: (State, number) => number = createCachedSelector(
  [
    getProductsById,
    getOrder,
  ],
  R.useWith(
    calculateOrderTotal, // calculate the total
    [
      R.identity, // passthrough the products
      R.compose(
        R.map<OrderProduct, number, any>(R.prop('amount')),
        R.indexBy(R.prop('product')), // index by the product id
        R.prop('products'), // get the products from the order
      ),
    ],
  ),
)(R.nthArg(1)) // cache by order id
export const getOrdersTotal = (state: State) => R.compose(
  R.sum, // sum all orders together
  R.map(R.partial(getOrderTotal, [ state ])), // calculate the total for each order
)(getOrdersIds(state))
