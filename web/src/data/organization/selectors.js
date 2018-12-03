import * as R from 'ramda'
import { createSelector } from 'reselect'
import { getQueryParameter } from 'data/route/selectors'

export const getOrganizationsIds = R.path([ 'organization', 'ids' ])
export const getOrganizationsById = R.path([ 'organization', 'byId' ])
export const getOrganizationOptions = createSelector(
  [ getOrganizationsIds, getOrganizationsById ],
  (ids, organizations) => R.map((id) => ({
    value: organizations[id].slug,
    label: organizations[id].name,
  }))(ids),
)
export const getOrganizationValues = createSelector(
  [ (state) => getQueryParameter(state, 'org'), getOrganizationOptions ],
  (values, options) => R.filter(
    R.compose(
      R.contains(R.__, values),
      R.prop('value'),
    ),
  )(options),
)
