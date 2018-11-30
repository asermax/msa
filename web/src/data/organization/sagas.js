import { put, call, all, takeLatest } from 'redux-saga/effects'
import { ORGANIZATION_ENTRYPOINT, apiGet } from 'data/api'
import {
  FETCH_ORGANIZATIONS_REQUEST,
  fetchOrganizationsSuccess,
  fetchOrganizationsFailure,
} from './actions'

const fetchOrganizations = function*() {
  try {
    // create the order first
    const products = yield call(apiGet, ORGANIZATION_ENTRYPOINT)

    yield put(fetchOrganizationsSuccess(products))
  } catch(e) {
    yield put(fetchOrganizationsFailure(e.message))
  }
}


export const organizationSaga = function*() {
  yield all([
    takeLatest(FETCH_ORGANIZATIONS_REQUEST, fetchOrganizations),
  ])
}
