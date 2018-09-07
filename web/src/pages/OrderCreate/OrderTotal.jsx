import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { css } from 'emotion'
import { getCurrentOrderTotal } from 'data/order/selectors'
import { hideOnMobile } from 'styles/util'

const mapStateToProps = (state) => ({
  orderTotal: getCurrentOrderTotal(state),
})

const enhancer = compose(
  connect(mapStateToProps),
  setDisplayName('OrderForm'),
)

export const OrderTotal = enhancer(({ orderTotal }) => (
  <tr>
    <td className={titleCell}>
      Total
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
  text-transform: uppercase;
  font-weight: bold;
  font-size: 130%;
`

const totalCell = css`
  text-align: right;
  font-weight: bold;
`
