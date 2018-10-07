import * as R from 'ramda'
import { call, select, put, actionChannel, take } from 'redux-saga/effects'
import { fetchProducts } from 'data/product/actions'
import { fetchProducers } from 'data/producer/actions'
import { fetchOrders } from 'data/order/actions'
import {
  NOT_FOUND, INDEX, ORDER_CREATE, ORDERS_LIST,
  redirect, goToIndex, goToOrderCreate,
} from './actions'
import { getCurrentRoute } from './selectors'


const onNotFound = function*() {
  yield put(redirect(goToIndex()))
}

const onIndex = function*() {
  yield put(redirect(goToOrderCreate()))
}

const onOrderCreate = function*() {
  yield put(fetchProducts())
}

const onOrdersList = function*() {
  yield put(fetchProducers())
  yield put(fetchProducts())
  yield put(fetchOrders())
}

const mapRouteToSaga = {
  [NOT_FOUND]: onNotFound,
  [INDEX]: onIndex,
  [ORDER_CREATE]: onOrderCreate,
  [ORDERS_LIST]: onOrdersList,
}

export const routeInitSaga = function*() {
  const channel = yield actionChannel(Object.keys(mapRouteToSaga))

  do {
    // take the current route
    let route = yield select(getCurrentRoute)

    if (R.not(R.isNil(mapRouteToSaga[route]))) {
      yield call(mapRouteToSaga[route])
    }

    // wait for the next route change
    yield take(channel)
  } while(true)
}
