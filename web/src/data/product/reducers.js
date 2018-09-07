import * as R from 'ramda'
import { combineReducers } from 'redux'
import { FETCH_PRODUCTS_SUCCESS } from './actions'

const idsDefault = []
const ids = (state = idsDefault, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return R.compose(
        R.map(R.prop('id')),
        R.prop('products'),
      )(action)
    default:
      return state
  }
}

const byIdDefault = {}
const byId = (state = byIdDefault, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return R.compose(
        R.indexBy(R.prop('id')),
        R.prop('products'),
      )(action)
    default:
      return state
  }
}

export const product = combineReducers({
  ids,
  byId,
})
