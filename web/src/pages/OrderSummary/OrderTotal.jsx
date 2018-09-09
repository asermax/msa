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
  <div className={styles.total}>
    <div className={styles.totalTitle}>
      Total
    </div>
    <div>
      ${orderTotal}
    </div>
  </div>
))
