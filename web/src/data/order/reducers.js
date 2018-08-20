import * as R from 'ramda'
import { combineReducers } from 'redux'
import { SET_ORDER_USER, SET_ORDER_PRODUCT_AMOUNT } from './actions'

const user = (state = '', action) => {
  switch (action.type) {
    case SET_ORDER_USER:
      return action.user
    default:
      return state
  }
}

const productsDefault = {}
const products = (state = productsDefault, action) => {
  switch (action.type) {
    case SET_ORDER_PRODUCT_AMOUNT:
      return R.ifElse(
        R.compose(R.equals(0), R.prop('amount')),
        R.compose( // in case the amount is 0
          R.dissoc, // remove the product id from the order products
          R.prop('id'),
        ),
        R.compose( // in case the value is not 0
          R.apply(R.assoc), // associate the amount to the modified order product id
          R.props([ 'id', 'amount' ]),
        ),
      )(action)(state)

    default:
      return state
  }
}

export const order = combineReducers({
  user,
  products,
})
