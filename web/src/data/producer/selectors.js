// @flow
import type { State } from 'data/types'
import type { ProductsIds } from 'data/product/types'
import type { Producer, ProducersIds, ProducersById } from './types'
import * as R from 'ramda'
import { getQuery } from 'data/route/selectors'
import { getProductsIds, getProductsById } from 'data/product/selectors'
import { createSelector } from 'reselect'
import createCachedSelector from 're-reselect'

export const getProducersIds: (State) => ProducersIds = R.compose(
  R.prop('ids'),
  R.prop('producer'),
)
export const getProducersById: (State) => ProducersById = R.compose(
  R.prop('byId'),
  R.prop('producer'),
)
export const getProducer: (State, id: string) => Producer =
  createCachedSelector<State, any, ProducersById, Producer>(
    [
      R.nthArg(1), // producer id
      getProducersById, // producer map
    ],
    R.prop, // receives (id, producerMap)
  )(R.nthArg(1))  // memoize by id
export const getProducerBySlug: (State, slug: string) => ?Producer =
  createCachedSelector<State, any, ProducersById, ?Producer>(
    [
      R.nthArg(1), // producer slug
      getProducersById, // producer map
    ],
    (slug, producers) => R.compose(
      R.find(R.propEq('slug', slug)), // find by the slug
      R.values,
    )(producers),
  )(R.nthArg(1))  // memoize by id

// current
export const getCurrentProducerSlug = createSelector(
  [ getQuery ],
  R.prop('prod'),
)
export const getCurrentProducer: (State) => ?Producer = (state) => R.unless(
  R.isNil,
  R.partial(getProducerBySlug, [ state ]),
)(getCurrentProducerSlug(state))
export const getCurrentProducerProducts: (State) => ProductsIds = createSelector(
  [
    getProductsIds,
    getProductsById,
    getCurrentProducer,
  ],
  (productsIds, products, producer) => {
    if (producer != null) {
      return R.filter(R.compose(
        R.propEq('producer')(producer.id),
        R.prop(R.__, products),
      ))(productsIds)
    } else {
      return productsIds
    }
  },
)
