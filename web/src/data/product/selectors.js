import * as R from 'ramda'
import { createSelector } from 'reselect'
import createCachedSelector from 're-reselect'

export const getProductsIds = R.path([ 'product', 'ids' ])
export const getProductsById = R.path([ 'product', 'byId' ])
export const getSortedProducts = createSelector(
  [ getProductsIds, getProductsById ],
  (ids, products) => R.map(
    R.prop(R.__, products),
  )(ids),
)
export const getProduct = createCachedSelector(
  [
    R.nthArg(1), // product id
    getProductsById, // product map
  ],
  R.prop, // receives (id, productMap)
)(R.nthArg(1))  // memoize by id
