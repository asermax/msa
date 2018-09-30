// @flow
import type { Saga } from 'redux-saga'
import { all, fork } from 'redux-saga/effects'
import { routeInitSaga } from './route/sagas'
import { producerSaga } from './producer/sagas'
import { productSaga } from './product/sagas'
import { orderSaga } from './order/sagas'

const initSagas = [
  routeInitSaga,
]

const sagas = [
  producerSaga,
  productSaga,
  orderSaga,
]

export const rootInitSaga: () => Saga<*> = function* rootSaga() {
  yield all(initSagas.map(saga => fork(saga)))
}

export const rootSaga: () => Saga<*> = function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)))
}

