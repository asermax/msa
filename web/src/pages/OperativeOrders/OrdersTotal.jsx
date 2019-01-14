import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { hideOnMobile } from 'styles/util'
import { getOrdersTotal } from 'data/order/selectors'
import { getCurrentProducersProductIds } from 'data/producer/selectors'
import * as styles from './styles'

const mapStateToProps = (state) => ({
  products: getCurrentProducersProductIds(state),
  total: getOrdersTotal(state),
})

const enhancer = compose(
  connect(mapStateToProps),
  setDisplayName('OrdersTotal'),
)

export const OrdersTotal = enhancer(({ products, total }) => (
  <tr>
    <td css={styles.titleCell}>
      Total
    </td>
    {products.map((id) => (
      <td key={id} css={hideOnMobile}>
      </td>
    ))}
    <td css={styles.totalCell}>
      ${total}
    </td>
    <td></td>
  </tr>
))
