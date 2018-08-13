import * as R from 'ramda'
import  { createSelector } from 'reselect'
import createCachedSelector from 're-reselect'
import { getProductIds, getProductsById } from 'data/product/selectors'

export const getOrderProducts = R.path([ 'order', 'products' ])
export const getOrderProductAmount = createCachedSelector(
  [
    R.nthArg(1), // product id
    getOrderProducts, // product map
  ],
  R.propOr(0), // receives (id, productMap), returns amount or 0
)(R.nthArg(1))  // memoize by id
export const getOrderTotal = createSelector(
  [
    getProductIds,
    getProductsById,
    getOrderProducts,
  ],
  R.always(100),
)
