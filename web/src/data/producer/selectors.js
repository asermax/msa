import * as R from 'ramda'
import { getQuery } from 'data/route/selectors'
import { getProductsIds, getProductsById } from 'data/product/selectors'
import { createSelector } from 'reselect'
import createCachedSelector from 're-reselect'

export const getProducersIds = R.compose(
  R.prop('ids'),
  R.prop('producer'),
)
export const getProducersById = R.compose(
  R.prop('byId'),
  R.prop('producer'),
)
export const getProducer = createCachedSelector(
  [
    R.nthArg(1), // producer id
    getProducersById, // producer map
  ],
  R.prop, // receives (id, producerMap)
)(R.nthArg(1))  // memoize by id
export const getProducerBySlug = createCachedSelector(
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
export const getCurrentProducer = (state) => R.unless(
  R.isNil,
  R.partial(getProducerBySlug, [ state ]),
)(getCurrentProducerSlug(state))

export const propIfExists = (prop, obj) => R.unless(R.isNil, R.prop(prop))(obj)
export const getCurrentProducerProducts = createSelector(
  [
    getProductsIds,
    getProductsById,
    getCurrentProducer,
  ],
  (productsIds, products, producer) => {
    return R.unless(
      R.always(producer !== null),
      R.filter(R.compose(
        R.propEq('producer')(propIfExists('id', producer)),
        R.prop(R.__, products),
      )),
    )(productsIds)
  },
)
