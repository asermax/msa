import * as R from 'ramda'
import  { createSelector } from 'reselect'
import createCachedSelector from 're-reselect'
import { getQuery } from 'data/route/selectors'
import { getProductsById } from 'data/product/selectors'
import { orderSchema } from './schemas'

export const getOrderUser = R.path([ 'order', 'user' ])
export const getOrderOrganization = createSelector(
  [ getQuery ],
  R.prop('org'),
)
export const getOrderProducts = R.path([ 'order', 'products' ])
export const getOrderProductsIds = createSelector(
  [ getOrderProducts ],
  R.keys,
)
export const getOrderProductAmount = createCachedSelector(
  [
    R.nthArg(1), // product id
    getOrderProducts, // product map
  ],
  R.propOr(0), // receives (id, productMap), returns amount or 0
)(R.nthArg(1))  // memoize by id
export const getOrderTotal = createSelector(
  [
    getProductsById,
    getOrderProducts,
  ],
  (products, orderProducts) => R.compose(
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
  )(orderProducts),
)
export const isOrderValid = createSelector(
  [ getOrderUser, getOrderOrganization, getOrderProducts ],
  R.compose(
    R.bind(orderSchema.isValidSync, orderSchema),
    R.unapply(
      R.zipObj([ 'user', 'organization', 'products' ]),
    ),
  ),
)
