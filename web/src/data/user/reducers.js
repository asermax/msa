import { combineReducers } from 'redux'
import { CHECK_SESSION_SUCCESS, CREATE_SESSION_SUCCESS } from './actions'

const current = (state = null, action) => {
  switch (action.type) {
    case CHECK_SESSION_SUCCESS:
    case CREATE_SESSION_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export const user = combineReducers({
  current,
})
