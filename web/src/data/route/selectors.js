import * as R from 'ramda'
import { createSelector } from 'reselect'

export const getCurrentRoute = R.path([ 'route', 'type' ])
export const getParameters = R.path([ 'route', 'payload' ])
export const getParameter = createSelector(
  [
    R.nthArg(1),
    getParameters,
  ],
  R.prop,
)
export const getQuery = R.path([ 'route', 'query' ])

