/**
 * @typedef {import('types/data').OrderAction} OrderAction
 * @typedef {import('types/data').OrderIds} OrderIds
 * @typedef {import('types/data').OrdersById} OrdersById
 */
import * as R from 'ramda'
import { combineReducers } from 'redux'
import {
  SET_ORDER_USER, SET_ORDER_PRODUCT_AMOUNT, FETCH_ORDERS_SUCCESS, FETCH_ORDER_SUCCESS,
  DELETE_ORDER_SUCCESS, EDIT_ORDER_SUCCESS,
} from './actions'

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

/** @type {OrderIds} */
const idsDefault = []

/**
 * @param {OrderIds} state - ids of the orders on state
 * @param {OrderAction} action - action to process
 * @returns {OrderIds}
 */
const ids = (state = idsDefault, action) => {
  switch (action.type) {
    case FETCH_ORDERS_SUCCESS:
      return R.pluck('id')(action.payload)
    case FETCH_ORDER_SUCCESS:
      return R.append(
        R.prop('id')(action.payload),
      )(state)
    case DELETE_ORDER_SUCCESS:
      return R.without(
        R.of(action.payload),
      )(state)
    default:
      return state
  }
}

/** @type {OrdersById} */
const byIdDefault = {}

/**
 * @param {OrdersById} state - orders in the state
 * @param {OrderAction} action - action to process
 * @returns {OrdersById}
 */
const byId = (state = byIdDefault, action) => {
  switch (action.type) {
    case FETCH_ORDERS_SUCCESS:
      return R.indexBy(
        R.prop('id'),
      )(action.payload)
    case FETCH_ORDER_SUCCESS:
      return R.assoc(
        R.prop('id')(action.payload),
        action.payload,
      )(state)
    case DELETE_ORDER_SUCCESS:
      return R.omit(
        R.of(action.payload),
      )(state)
    case EDIT_ORDER_SUCCESS:
      return R.evolve({
        [action.payload.id]: R.mergeDeepLeft(action.payload),
      })(state)
    default:
      return state
  }
}

export const order = combineReducers({
  user,
  products,
  ids,
  byId,
})
