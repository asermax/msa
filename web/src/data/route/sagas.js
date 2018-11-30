import * as R from 'ramda'
import { call, select, put, actionChannel, take } from 'redux-saga/effects'
import { fetchProducts } from 'data/product/actions'
import { fetchProducers } from 'data/producer/actions'
import { fetchOrganizations } from 'data/organization/actions'
import { fetchOrders } from 'data/order/actions'
import { CHECK_SESSION_SUCCESS, CHECK_SESSION_FAILURE, checkSession } from 'data/user/actions'
import { getCurrentUser } from 'data/user/selectors'
import {
  NOT_FOUND, INDEX, ORDER_CREATE, ORDER_DETAILS, ORDER_DELETE,
  OPERATIVE_DASHBOARD, OPERATIVE_ORDERS, OPERATIVE_PRODUCTS,
  redirect, goToIndex, goToLogin, goToOrderCreate, goToOperativeOrders,
} from './actions'
import { getCurrentRoute } from './selectors'

const composeSaga = function(...generators) {
  return function*() {
    for (let generator of R.reverse(generators)) {
      const earlyBreak = yield call(generator)

      if (earlyBreak) {
        break
      }
    }
  }
}

const requiresLogin = function*() {
  let user = yield select(getCurrentUser)

  if (user === null) {
    yield put(checkSession())
    yield take([ CHECK_SESSION_SUCCESS, CHECK_SESSION_FAILURE ])

    user = yield select(getCurrentUser)
  }

  if (user === null) {
    yield put(redirect(goToLogin()))
    return true
  }
}

const onNotFound = function*() {
  yield put(redirect(goToIndex()))
}

const onIndex = function*() {
  yield put(redirect(goToOrderCreate()))
}

const onOrderCreate = function*() {
  yield put(fetchProducts())
}

const prepareOperativeDashboard = function*() {
  const route = yield select(getCurrentRoute)

  if (route === OPERATIVE_DASHBOARD) {
    yield put(redirect(goToOperativeOrders()))
  } else {
    yield put(fetchOrganizations())
    yield put(fetchProducers())
    yield put(fetchProducts())
    yield put(fetchOrders())
  }
}
const onOperativeDashboard = composeSaga(
  prepareOperativeDashboard,
  requiresLogin,
)

const mapRouteToSaga = {
  [NOT_FOUND]: onNotFound,
  [INDEX]: onIndex,
  [ORDER_CREATE]: onOrderCreate,
  [ORDER_DETAILS]: onOperativeDashboard,
  [ORDER_DELETE]: onOperativeDashboard,
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
