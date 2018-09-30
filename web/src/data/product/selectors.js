// @flow
import type { State } from 'data/types'
import type { Product, ProductsIds, ProductsById } from './types'
import * as R from 'ramda'
import createCachedSelector from 're-reselect'

export const getProductsIds: (State) => ProductsIds = R.compose(R.prop('ids'), R.prop('product'))
export const getProductsById: (State) => ProductsById = R.compose(
  R.prop('byId'),
  R.prop('product'),
)
export const getProduct: (State, id: string) => Product =
  createCachedSelector<State, any, ProductsById, Product>(
    [
      R.nthArg(1), // product id
      getProductsById, // product map
    ],
    R.prop, // receives (id, productMap)
  )(R.nthArg(1))  // memoize by id
