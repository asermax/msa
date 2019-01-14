/** @typedef {import('types/data').State} State */
/** @typedef {import('types/data').ProductsById} ProductsById */
/** @typedef {import('types/data').OrdersById} OrdersById */
/** @typedef {import('types/data').OrderIds} OrderIds */
/** @typedef {import('types/data').IndexedOrderProduct } IndexedOrderProducts */
import * as R from 'ramda'
import  { createSelector } from 'reselect'
import createCachedSelector from 're-reselect'
import { getCurrentOrganization } from 'data/organization/selectors'
import { getCurrentProducersProductIds } from 'data/producer/selectors'
import { getProductsById } from 'data/product/selectors'
import { orderSchema } from './schemas'

// helpers
/**
 * @param products {ProductsById} - all products indexed by ids
 * @param orderProducts {IndexedOrderProducts} - products for an order indexed by product id
 * @returns number - total
 */
const calculateOrderTotal = (products, orderProducts) => R.compose(
  R.sum,
  R.values,
  R.evolve( // create an evolve object that multiplies by the product price
    R.map(
      R.compose(
        R.multiply,
        R.prop('price'),
      ),
    )(products),
  ),
)(orderProducts)

// orden creation
export const getCurrentOrderUser = R.path([ 'order', 'user' ])
export const getCurrentOrderProducts = R.compose(
  R.prop('products'),
  R.prop('order'),
)
export const getCurrentOrderProductsIds = createSelector(
  [ getCurrentOrderProducts ],
  R.keys,
)
export const getCurrentOrderProductAmount = createCachedSelector(
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
  [ getCurrentOrderUser, getCurrentOrganization, getCurrentOrderProducts ],
  R.compose(
    R.bind(orderSchema.isValidSync, orderSchema),
    R.unapply(
      R.zipObj([ 'user', 'organization', 'products' ]),
    ),
  ),
)

// general
export const getOrdersIds = R.compose(R.prop('ids'), R.prop('order'))

/** @type {(State) => OrdersById} */
export const getOrdersById = R.path([ 'order', 'byId' ])

export const getOrder = createCachedSelector(
  [
    R.nthArg(1), // order id
    getOrdersById, // orders map
  ],
  R.prop, // return the order id from the map
)(R.nthArg(1)) // cache by order id
export const getOrderProducts = createCachedSelector(
  [
    getOrder, // order for id
  ],
  R.compose(
    R.map(R.prop('amount')),
    R.indexBy(R.prop('product')), // index by the product id
    R.prop('products'), // get the products from the order
  ),
)(R.nthArg(1))
export const getOrderProductAmount = createCachedSelector(
  [
    R.nthArg(2), // product id (second argument is the order id)
    getOrderProducts, // products for the order
  ],
  R.propOr('0'),
)(R.converge(
  R.unapply(R.join(':')), // join the order id and the project id for the cache key
  [
    R.nthArg(1),
    R.nthArg(2),
  ],
))
export const getOrderTotal = createCachedSelector(
  [
    getProductsById,
    getOrderProducts,
  ],
  calculateOrderTotal,
)(R.nthArg(1)) // cache by order id
export const getOrderTotalForCurrentProducers = createCachedSelector(
  [
    getProductsById,
    getOrderProducts,
    getCurrentProducersProductIds,
  ],
  (products, orderProducts, producerProducts) => R.compose(
    R.partial(calculateOrderTotal, [ products ]), // calculate the total
    R.pick(producerProducts),
  )(orderProducts),
)(R.nthArg(1)) // cache by order id

export const getFilteredOrdersIds = createSelector(
  [
    getOrdersIds,
    getOrdersById,
    getCurrentProducersProductIds,
  ],
  (ids, orders, producerProducts) => R.filter(
    R.compose(
      R.any(R.flip(R.contains)(producerProducts)),
      R.pluck('product'),
      R.prop('products'),
      R.prop(R.__, orders),
    ),
  )(ids),
)
export const getOrdersTotal = (state) => R.compose(
  R.sum, // sum all orders together
  R.map( // calculate the total for each order
    R.partial(getOrderTotalForCurrentProducers, [ state ])
  ),
)(getFilteredOrdersIds(state))

export const getOrdersProducts = (state) => R.compose(
  R.map(R.partial(getOrderProducts, [ state ])), // get the products for all the orders
)(getFilteredOrdersIds(state))
export const getFilteredOrdersProducts = (state) => R.map(
  R.pick(getCurrentProducersProductIds(state)),
)(getOrdersProducts(state))
export const getOrdersWholeProducts = createSelector(
  [
    getFilteredOrdersProducts,
  ],
  R.compose(
    R.reduce(R.mergeWith(R.add), {}), // sum all values
    R.map(R.map(Math.floor)), // get only the integer part
  ),
)
export const getOrdersWholeProductAmount = createCachedSelector(
  [
    R.nthArg(1),
    getOrdersWholeProducts,
  ],
  R.propOr(0),
)(R.nthArg(1))

export const getOrdersFractionalProducts = createSelector(
  [
    getFilteredOrdersProducts,
  ],
  R.compose(
    R.reduce(R.mergeWith(R.add), {}),
    R.map(R.map(R.compose(
      Math.ceil, // round up
      R.flip(R.modulo)(1), // remove the integer part
    ))),
  ),
)
export const getOrdersFractionalProductAmount = createCachedSelector(
  [
    R.nthArg(1),
    getOrdersFractionalProducts,
  ],
  R.propOr(0),
)(R.nthArg(1))
