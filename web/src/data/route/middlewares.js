import * as R from 'ramda'
import { ALL_ROUTES } from './actions'
import { getStickyQueryParameters } from './selectors'

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
  }

  next(action)
})
