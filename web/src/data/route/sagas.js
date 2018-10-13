import * as R from 'ramda'
import { call, select, put, actionChannel, take } from 'redux-saga/effects'
import { fetchProducts } from 'data/product/actions'
import { fetchProducers } from 'data/producer/actions'
import { fetchOrders } from 'data/order/actions'
import {
  NOT_FOUND, INDEX, ORDER_CREATE, OPERATIVE_ORDERS, ORDER_DETAILS, OPERATIVE_PRODUCTS,
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

const onOperativeDashboard = function*() {
  yield put(fetchProducers())
  yield put(fetchProducts())
  yield put(fetchOrders())
}

const mapRouteToSaga = {
  [NOT_FOUND]: onNotFound,
  [INDEX]: onIndex,
  [ORDER_CREATE]: onOrderCreate,
  [OPERATIVE_ORDERS]: onOperativeDashboard,
  [ORDER_DETAILS]: onOperativeDashboard,
  [OPERATIVE_PRODUCTS]: onOperativeDashboard,
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
