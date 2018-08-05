import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { hideOnMobile } from 'styles/util'

const mapStateToProps = () => ({
  orderTotal: 0,
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
