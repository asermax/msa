// @flow
import type { State } from 'data/types'
import * as R from 'ramda'

export const getCurrentRoute: (State) => string = R.compose(R.prop('type'), R.prop('route'))
export const getQuery: (State) => { [string]: string } = R.compose(
  R.prop('query'),
  R.prop('route'),
)

