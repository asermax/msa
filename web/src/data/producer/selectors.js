// @flow
import type { State } from 'data/types'
import type { Product, ProductsById } from './types'
import * as R from 'ramda'
import createCachedSelector from 're-reselect'

export const getProductIds: (State) => Array<string> = R.path([ 'product', 'ids' ])
export const getProductsById: (State) => ProductsById = R.path([ 'product', 'byId' ])
export const getProduct: (State, id: string) => Product =
  createCachedSelector<State, any, ProductsById, Product>(
    [
      R.nthArg(1), // product id
      getProductsById, // product map
    ],
    R.prop, // receives (id, productMap)
  )(R.nthArg(1))  // memoize by id
