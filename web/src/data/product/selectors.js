import * as R from 'ramda'
import createCachedSelector from 're-reselect'

export const getProductIds = R.path([ 'product', 'ids' ])
export const getProductsById = R.path([ 'product', 'byId' ])
export const getProduct = createCachedSelector(
  [
    R.nthArg(1), // product id
    getProductsById, // product map
  ],
  R.prop, // receives (id, productMap)
)(R.nthArg(1))  // memoize by id
