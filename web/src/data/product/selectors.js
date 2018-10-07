import * as R from 'ramda'
import createCachedSelector from 're-reselect'

export const getProductsIds = R.compose(R.prop('ids'), R.prop('product'))
export const getProductsById = R.compose(
  R.prop('byId'),
  R.prop('product'),
)
export const getProduct = createCachedSelector(
  [
    R.nthArg(1), // product id
    getProductsById, // product map
  ],
  R.prop, // receives (id, productMap)
)(R.nthArg(1))  // memoize by id
