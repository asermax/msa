import * as R from 'ramda'
import { getQueryParameter } from 'data/route/selectors'
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
export const getCurrentProducersSlugs = (state) => getQueryParameter(state, 'prod')
export const getCurrentProducersIds = createSelector(
  [ getProducersById, getCurrentProducersSlugs ],
  (producers, slugs) => R.compose(
    R.pluck('id'),
    R.filter(R.compose(
      R.contains(R.__, slugs),
      R.prop('slug'),
    )),
    R.values,
  )(producers),
)
export const getCurrentProducersProductIds = createSelector(
  [
    getProductsIds,
    getProductsById,
    getCurrentProducersIds,
  ],
  (productsIds, products, producers) => R.unless(
    R.always(R.isEmpty(producers)),
    R.filter(R.compose(
      R.contains(R.__, producers),
      R.prop('producer'),
      R.prop(R.__, products),
    )),
  )(productsIds),
)
export const getCurrentProducersProducts = createSelector(
  [ getCurrentProducersProductIds, getProductsById ],
  R.props,
)

// filters
export const getProducerOptions = createSelector(
  [ getProducersIds, getProducersById ],
  (ids, producers) => R.map((id) => ({
    value: producers[id].slug,
    label: producers[id].name,
  }))(ids),
)
export const getProducerValues = createSelector(
  [ getCurrentProducersSlugs, getProducerOptions ],
  (values, options) => R.filter(
    R.compose(
      R.contains(R.__, values),
      R.prop('value'),
    ),
  )(options),
)
