import * as R from 'ramda'
import { createSelector } from 'reselect'

export const getOrganizationsIds = R.path([ 'organization', 'ids' ])
export const getOrganizationsById = R.path([ 'organization', 'byId' ])
export const getOrganizationsOptions = createSelector(
  [ getOrganizationsIds, getOrganizationsById ],
  (ids, organizations) => R.map((id) => ({
    value: organizations[id].slug,
    label: organizations[id].name,
  }))(ids),
)
