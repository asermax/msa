import * as R from 'ramda'
import { combineReducers } from 'redux'
import { SET_ORDER_PRODUCT_AMOUNT } from './actions'

const productsDefault = {}
const products = (state = productsDefault, action) => {
  switch (action.type) {
    case SET_ORDER_PRODUCT_AMOUNT:
      return R.assoc(action.id, action.amount)(state)
    default:
      return state
  }
}

export const order = combineReducers({
  products,
})
