import * as R from 'ramda'

export const getCurrentRoute = R.compose(R.prop('type'), R.prop('route'))
export const getQuery = R.compose(
  R.prop('query'),
  R.prop('route'),
)

