export const CHECK_SESSION_REQUEST = 'session/check/request'
export const CHECK_SESSION_SUCCESS = 'session/check/success'
export const CHECK_SESSION_FAILURE = 'session/check/failure'
export const CREATE_SESSION_REQUEST = 'session/create/request'
export const CREATE_SESSION_SUCCESS = 'session/create/success'
export const CREATE_SESSION_FAILURE = 'session/create/failure'

export const checkSession = () => ({
  type: CHECK_SESSION_REQUEST,
})

export const checkSessionSuccess = (user) => ({
  type: CHECK_SESSION_SUCCESS,
  payload: user,
})

export const checkSessionFailure = (reason) => ({
  type: CHECK_SESSION_FAILURE,
  payload: reason,
})

export const createSession = (code) => ({
  type: CREATE_SESSION_REQUEST,
  payload: code,
})

export const createSessionSuccess = (user) => ({
  type: CREATE_SESSION_SUCCESS,
  payload: user,
})

export const createSessionFailure = (reason) => ({
  type: CREATE_SESSION_FAILURE,
  payload: reason,
})
