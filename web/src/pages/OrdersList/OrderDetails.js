import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, flattenProp, setPropTypes, setDisplayName } from 'recompose'
import { getOrder } from 'data/order/selectors'

const mapStateToProps = (state, { id }) => ({
  order: getOrder(state, id),
})

const enhancer = compose(
  connect(mapStateToProps),
  flattenProp('order'),
  setPropTypes({
    id: PropTypes.number.isRequired,
  }),
  setDisplayName('OrderDetails'),
)

export const OrderDetails = enhancer(({ id, user, organization }) => (
  <div>
    {id} - {user} - {organization}
  </div>
))
