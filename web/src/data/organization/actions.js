export const FETCH_ORGANIZATIONS_REQUEST = 'organizations/fetch/request'
export const FETCH_ORGANIZATIONS_SUCCESS = 'organizations/fetch/success'
export const FETCH_ORGANIZATIONS_FAILURE = 'organizations/fetch/failure'

export const fetchOrganizations = () => ({
  type: FETCH_ORGANIZATIONS_REQUEST,
})

export const fetchOrganizationsSuccess = (organizations) => ({
  type: FETCH_ORGANIZATIONS_SUCCESS,
  payload: organizations,
})

export const fetchOrganizationsFailure = (reason) => ({
  type: FETCH_ORGANIZATIONS_FAILURE,
  payload: reason,
})
