import * as R from 'ramda'
import { call, select, put, actionChannel, take } from 'redux-saga/effects'
import { fetchProducts } from 'data/product/actions'
import { NOT_FOUND, INDEX, ORDER_CREATE, goToIndex, goToOrderCreate } from './actions'
import { getCurrentRoute } from './selectors'


const onNotFound = function*() {
  yield put(goToIndex())
}

const onOrderCreate = function*() {
  yield put(fetchProducts())
}

const onIndex = function*() {
  yield put(goToOrderCreate())
}

const mapRouteToSaga = {
  [NOT_FOUND]: onNotFound,
  [INDEX]: onIndex,
  [ORDER_CREATE]: onOrderCreate,
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
