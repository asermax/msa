import { combineReducers } from 'redux'
import { allRoutes } from './actions'

const current = (state = null, action) => {
  if (allRoutes.includes(action.type)) {
    return action.type
  } else {
    return state
  }
}

export const route = combineReducers({
  current,
})
