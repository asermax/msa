import { all, fork } from 'redux-saga/effects'
import { routeInitSaga } from './route/sagas'
import { productSaga } from './product/sagas'
import { orderSaga } from './order/sagas'

const initSagas = [
  routeInitSaga,
]

const sagas = [
  productSaga,
  orderSaga,
]

export const rootInitSaga = function* rootSaga() {
  yield all(initSagas.map(saga => fork(saga)))
}

export const rootSaga = function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)))
}

