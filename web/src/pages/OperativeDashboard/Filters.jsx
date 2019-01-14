import * as R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { setRouteQueryParam } from 'data/route/actions'
import { getOrganizationOptions, getOrganizationValues } from 'data/organization/selectors'
import { getProducerOptions, getProducerValues } from 'data/producer/selectors'
import { Select } from 'components/Select'
import * as styles from './styles'

const mapStateToProps = (state) => ({
  organizationOptions: getOrganizationOptions(state),
  organizationValues: getOrganizationValues(state),
  producerOptions: getProducerOptions(state),
  producerValues: getProducerValues(state),
})

const mapDispatchToProps = (dispatch) => ({
  setFilter: (name, value) => dispatch(setRouteQueryParam(name, value, true)),
})

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  setDisplayName('Filters'),
)

export const Filters = enhancer(({
  organizationOptions, organizationValues, producerOptions, producerValues, setFilter,
}) => (
  <div css={styles.filters}>
    <label css={styles.filterLabel}>Organización:</label>
    <Select
      options={organizationOptions}
      value={organizationValues}
      onChange={(values) => setFilter('org', R.pluck('value')(values))}
      placeholder=""
      noOptionsMessage={() => 'No hay organizaciones para seleccionar'}
      isMulti
    />
    <label css={styles.filterLabel}>Producer:</label>
    <Select
      options={producerOptions}
      value={producerValues}
      onChange={(values) => setFilter('prod', R.pluck('value')(values))}
      placeholder=""
      noOptionsMessage={() => 'No hay productores para seleccionar'}
      isMulti
    />
  </div>
))
