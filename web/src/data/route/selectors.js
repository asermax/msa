import * as R from 'ramda'

export const getCurrentRoute = R.path([ 'route', 'type' ])
export const getQuery = R.path([ 'route', 'query' ])
