// @flow
import type { Saga } from 'redux-saga'
import { put, call, all, takeLatest } from 'redux-saga/effects'
import { PRODUCER_ENTRYPOINT, apiGet } from 'data/api'
import { FETCH_PRODUCERS_REQUEST, fetchProducersSuccess, fetchProducersFailure } from './actions'

const fetchProducers: () => Saga<*> = function*() {
  try {
    // create the order first
    const products = yield call(apiGet, PRODUCER_ENTRYPOINT)

    yield put(fetchProducersSuccess(products))
  } catch(e) {
    yield put(fetchProducersFailure(e.message))
  }
}


export const producerSaga: () => Saga<*> = function*() {
  yield all([
    takeLatest(FETCH_PRODUCERS_REQUEST, fetchProducers),
  ])
}
