import { all, fork } from 'redux-saga/effects'
import { routeInitSaga } from './route/sagas'
import { producerSaga } from './producer/sagas'
import { productSaga } from './product/sagas'
import { orderSaga } from './order/sagas'
import { userSaga } from './user/sagas'
import { organizationSaga } from './organization/sagas'

const initSagas = [
  routeInitSaga,
]

const sagas = [
  producerSaga,
  productSaga,
  orderSaga,
  userSaga,
  organizationSaga,
]

export const rootInitSaga = function* rootSaga() {
  yield all(initSagas.map(saga => fork(saga)))
}

export const rootSaga = function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)))
}

