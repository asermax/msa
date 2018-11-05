import { put, call, select, all, takeLatest } from 'redux-saga/effects'
import { SESSION_ENTRYPOINT, apiGet, apiPost } from 'data/api'
import { getPreviousRoute } from 'data/route/selectors'
import { goToOperativeDashboard, redirect } from 'data/route/actions'
import {
  CHECK_SESSION_REQUEST, checkSessionSuccess, checkSessionFailure,
  CREATE_SESSION_REQUEST, createSessionSuccess, createSessionFailure,
} from './actions'

const checkSession = function*() {
  try {
    // fetch the user session
    const user = yield call(apiGet, SESSION_ENTRYPOINT)

    yield put(checkSessionSuccess(user))
  } catch(e) {
    yield put(checkSessionFailure(e.message))
  }
}

const createSession = function*({ payload }) {
  try {
    // try to create a user session
    const user = yield call(apiPost, SESSION_ENTRYPOINT, { code: payload })

    // make the user available
    yield put(createSessionSuccess(user))

    // try to access the previous route
    const previousRoute = yield select(getPreviousRoute, goToOperativeDashboard())
    yield put(redirect(previousRoute))
  } catch(e) {
    yield put(createSessionFailure(e.message))
  }
}

export const userSaga = function*() {
  yield all([
    takeLatest(CHECK_SESSION_REQUEST, checkSession),
    takeLatest(CREATE_SESSION_REQUEST, createSession),
  ])
}
