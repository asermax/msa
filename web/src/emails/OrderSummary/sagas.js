import { put, take } from 'redux-saga/effects'
import { fetchOrder, FETCH_ORDER_SUCCESS } from 'data/order/actions'

export default function* ({ orderId }) {
  yield put(fetchOrder(orderId))
  yield take(FETCH_ORDER_SUCCESS)
}
