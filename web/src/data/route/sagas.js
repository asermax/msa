import * as R from 'ramda'
import { call, select, put, actionChannel, take } from 'redux-saga/effects'
import { fetchProducts } from 'data/product/actions'
import { fetchProducers } from 'data/producer/actions'
import { fetchOrganizations } from 'data/organization/actions'
import { getCurrentOrganization } from 'data/organization/selectors'
import { fetchOrders } from 'data/order/actions'
import { CHECK_SESSION_SUCCESS, CHECK_SESSION_FAILURE, checkSession } from 'data/user/actions'
import { getCurrentUser } from 'data/user/selectors'
import {
  NOT_FOUND, INDEX, ORDER_CREATE, ORDER_DETAILS, ORDER_DELETE,
  OPERATIVE_DASHBOARD, OPERATIVE_ORDERS, OPERATIVE_PRODUCTS,
  redirect, goToIndex, goToLogin, goToOrderCreate, goToOperativeOrders,
} from './actions'
import { getCurrentRoute } from './selectors'

const composeSaga = function(...sagas) {
  return function*() {
    for (let saga of R.reverse(sagas)) {
      // call all sagas in reverse order until one breaks or all complete
      const earlyBreak = yield call(saga)

      if (earlyBreak) {
        break
      }
    }
  }
}

const memoizeSaga = function(selectors, saga) {
  let previousValues = null

  return function*() {
    const values =  []

    for (let selector of selectors) {
      // obtain all the values from the list of selectors
      values.push(yield select(selector))
    }

    if (R.not(R.equals(previousValues, values))) {
      // if the values changed, call the saga; otherwise don't do anything
      yield call(saga, values)

      // save the values for the next run
      previousValues = values
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

const onOperativeDashboardIndex = function*() {
  yield put(redirect(goToOperativeOrders()))
}

const prepareOperativeDashboard = memoizeSaga(
  [ getCurrentOrganization ],
  function*() {
    yield put(fetchOrganizations())
    yield put(fetchProducers())
    yield put(fetchProducts())
    yield put(fetchOrders())
  },
)
const onOperativeDashboard = composeSaga(
  prepareOperativeDashboard,
  requiresLogin,
)

const mapRouteToSaga = {
  [NOT_FOUND]: onNotFound,
  [INDEX]: onIndex,
  [ORDER_CREATE]: onOrderCreate,
  [OPERATIVE_DASHBOARD]: onOperativeDashboardIndex,
  [ORDER_DETAILS]: onOperativeDashboard,
  [ORDER_DELETE]: onOperativeDashboard,
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
