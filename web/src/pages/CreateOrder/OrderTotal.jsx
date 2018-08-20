import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { css } from 'emotion'
import { getOrderTotal } from 'data/order/selectors'
import { hideOnMobile } from 'styles/util'

const mapStateToProps = (state) => ({
  orderTotal: getOrderTotal(state),
})

const enhancer = compose(
  connect(mapStateToProps),
  setDisplayName('OrderForm'),
)

export const OrderTotal = enhancer(({ orderTotal }) => (
  <tr>
    <td className={titleCell}>
      TOTAL
    </td>
    <td className={hideOnMobile}></td>
    <td></td>
    <td className={hideOnMobile}></td>
    <td className={totalCell}>
      ${orderTotal}
    </td>
  </tr>
))

const titleCell = css`
  font-weight: bold;
  font-size: 130%;
`

const totalCell = css`
  text-align: right;
  font-weight: bold;
`
