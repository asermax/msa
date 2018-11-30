import * as R from 'ramda'
import { createSelector } from 'reselect'

export const getOrganizationsIds = R.path([ 'organization', 'ids' ])
export const getOrganizationsById = R.path([ 'organization', 'byId' ])
export const getOrganizationsOptions = createSelector(
  [ getOrganizationsIds, getOrganizationsById ],
  (ids, organizations) => R.map((id) => ({
    value: id,
    label: organizations[id].name,
  }))(ids),
)
