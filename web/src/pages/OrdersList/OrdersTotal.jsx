import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { getOrdersTotal } from 'data/order/selectors'
import * as styles from './styles'

const mapStateToProps = (state) => ({
  total: getOrdersTotal(state),
})

const enhancer = compose(
  connect(mapStateToProps),
  setDisplayName('OrdersTotal'),
)

export const OrdersTotal = enhancer(({ total }) => (
  <tr>
    <td className={styles.titleCell}>
      Total
    </td>
    <td className={styles.totalCell}>
      ${total}
    </td>
  </tr>
))
