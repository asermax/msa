import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
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
    <td>
      TOTAL
    </td>
    <td className={hideOnMobile}></td>
    <td></td>
    <td className={hideOnMobile}></td>
    <td>
      ${orderTotal}
    </td>
  </tr>
))
