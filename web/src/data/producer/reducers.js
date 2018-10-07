import * as R from 'ramda'
import { combineReducers } from 'redux'
import { FETCH_PRODUCERS_SUCCESS } from './actions'

const idsDefault = []
const ids = (state = idsDefault, action) => {
  switch (action.type) {
    case FETCH_PRODUCERS_SUCCESS:
      return R.compose(
        R.map(R.prop('id')),
        R.prop('payload'),
      )(action)
    default:
      return state
  }
}

const byIdDefault = {}
const byId = (state = byIdDefault, action) => {
  switch (action.type) {
    case FETCH_PRODUCERS_SUCCESS:
      return R.compose(
        R.indexBy(R.prop('id')),
        R.prop('payload'),
      )(action)
    default:
      return state
  }
}

export const producer = combineReducers({
  ids,
  byId,
})
