import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, flattenProp, setPropTypes, setDisplayName } from 'recompose'
import { css } from 'emotion'
import { getOrder, getOrderTotal } from 'data/order/selectors'

const mapStateToProps = (state, { id }) => ({
  order: getOrder(state, id),
  total: getOrderTotal(state, id),
})

const enhancer = compose(
  connect(mapStateToProps),
  flattenProp('order'),
  setPropTypes({
    id: PropTypes.number.isRequired,
  }),
  setDisplayName('OrderDetails'),
)

export const OrderDetails = enhancer(({ user, total }) => (
  <tr>
    <td>
      {user}
    </td>
    <td className={totalCell}>
      ${total}
    </td>
  </tr>
))

const totalCell = css`
  text-align: right;
  font-weight: bold;
`
