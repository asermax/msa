/** @typedef {import('types/data').State} State */
import * as R from 'ramda'
import { createSelector } from 'reselect'

export const getCurrentRoute = R.path([ 'route', 'type' ])

/** @type {import('reselect').ParametricSelector<State, string, object>} */
export const getParameters = R.path([ 'route', 'payload' ])

export const getParameter = createSelector(
  [
    R.nthArg(1),
    getParameters,
  ],
  R.prop,
)
export const getQuery = R.path([ 'route', 'query' ])
const headLens = R.lensIndex(0)
export const getQueryParameters = createSelector(
  [ getQuery ],
  R.compose(
    R.fromPairs,
    R.map(R.over(headLens, R.replace('!', ''))),
    R.toPairs,
  ),
)
export const getStickyQueryParameters = createSelector(
  [ getQuery ],
  R.pickBy((value, key) => R.endsWith('!')(key)),
)

export const getPreviousRoute = (state, fallback) => R.compose(
  R.ifElse(
    R.compose(
      R.isEmpty,
      R.prop('type'),
    ),
    R.always(fallback),
    R.pick([ 'type', 'payload', 'query' ]),
  ),
  R.path([ 'route', 'prev' ]),
)(state)
