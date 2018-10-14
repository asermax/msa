import * as R from 'ramda'
import { call, select, put, actionChannel, take } from 'redux-saga/effects'
import { fetchProducts } from 'data/product/actions'
import { fetchProducers } from 'data/producer/actions'
import { fetchOrders } from 'data/order/actions'
import {
  NOT_FOUND, INDEX, ORDER_CREATE, ORDER_DETAILS,
  OPERATIVE_DASHBOARD, OPERATIVE_ORDERS, OPERATIVE_PRODUCTS,
  redirect, goToIndex, goToOrderCreate, goToOperativeOrders,
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
  const route = yield select(getCurrentRoute)

  if (route === OPERATIVE_DASHBOARD) {
    yield put(redirect(goToOperativeOrders()))
  } else {
    yield put(fetchProducers())
    yield put(fetchProducts())
    yield put(fetchOrders())
  }
}

const mapRouteToSaga = {
  [NOT_FOUND]: onNotFound,
  [INDEX]: onIndex,
  [ORDER_CREATE]: onOrderCreate,
  [ORDER_DETAILS]: onOperativeDashboard,
  [OPERATIVE_DASHBOARD]: onOperativeDashboard,
  [OPERATIVE_ORDERS]: onOperativeDashboard,
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
