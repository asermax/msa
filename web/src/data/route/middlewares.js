import * as R from 'ramda'
import { ALL_ROUTES, SET_ROUTE_QUERY_PARAM } from './actions'
import { getQuery, getStickyQueryParameters, getCurrentRoute } from './selectors'

export const queryParametersMiddleware = R.curry((store, next, action) => {
  if (R.contains(action.type)(ALL_ROUTES)) {
    const stickyQueryParams = getStickyQueryParameters(store.getState())
    const queryLens = R.lensPath([ 'payload', 'query' ])

    action = R.over(
      queryLens,
      R.compose(
        R.merge(stickyQueryParams),
        R.defaultTo({}),
      ),
    )(action)
  } else if (action.type === SET_ROUTE_QUERY_PARAM) {
    const currentRoute = getCurrentRoute(store.getState())
    const queryParams = getQuery(store.getState())

    const { name, sticky, value } = action.payload
    const parameterName = `${name}${sticky ? '!' : ''}`
    const change = R.isEmpty(value) ? R.dissoc(parameterName) : R.assoc(parameterName, value)
    const newParams = change(queryParams)

    action = {
      type: currentRoute,
      payload: {
        query: newParams,
      },
    }
  }

  next(action)
})
