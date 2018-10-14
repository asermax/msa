import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { hideOnMobile } from 'styles/util'
import { getOrdersTotal } from 'data/order/selectors'
import { getProductsIds } from 'data/product/selectors'
import * as styles from './styles'

const mapStateToProps = (state) => ({
  products: getProductsIds(state),
  total: getOrdersTotal(state),
})

const enhancer = compose(
  connect(mapStateToProps),
  setDisplayName('OrdersTotal'),
)

export const OrdersTotal = enhancer(({ products, total }) => (
  <tr>
    <td className={styles.titleCell}>
      Total
    </td>
    {products.map((id) => (
      <td key={id} className={hideOnMobile}>
      </td>
    ))}
    <td className={styles.totalCell}>
      ${total}
    </td>
  </tr>
))
