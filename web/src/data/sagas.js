import { all, fork } from 'redux-saga/effects'

const sagas = [
]

const initSagas = [
]

export const rootSaga = function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)))
}

export const rootInitSaga = function* rootSaga() {
  yield all(initSagas.map(saga => fork(saga)))
}
