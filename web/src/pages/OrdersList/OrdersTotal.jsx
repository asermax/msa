import React from 'react'
import { css } from 'emotion'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { getOrdersTotal } from 'data/order/selectors'

const mapStateToProps = (state) => ({
  total: getOrdersTotal(state),
})

const enhancer = compose(
  connect(mapStateToProps),
  setDisplayName('OrdersTotal'),
)

export const OrdersTotal = enhancer(({ total }) => (
  <tr>
    <td className={titleCell}>
      Total
    </td>
    <td className={totalCell}>
      ${total}
    </td>
  </tr>
))

const titleCell = css`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 130%;
`

const totalCell = css`
  text-align: right;
  font-weight: bold;
`
