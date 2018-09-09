import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { getCurrentOrderTotal } from 'data/order/selectors'
import * as styles from './styles'

const mapStateToProps = (state) => ({
  orderTotal: getCurrentOrderTotal(state),
})

const enhancer = compose(
  connect(mapStateToProps),
  setDisplayName('OrderForm'),
)

export const OrderTotal = enhancer(({ orderTotal }) => (
  <tr>
    <td className={styles.titleCell}>
      Total
    </td>
    <td className={styles.hideOnMobile}></td>
    <td></td>
    <td className={styles.hideOnMobile}></td>
    <td className={styles.totalCell}>
      ${orderTotal}
    </td>
  </tr>
))
