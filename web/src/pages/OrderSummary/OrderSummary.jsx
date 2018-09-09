import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { forRoute } from 'hocs/forRoute'
import { ORDER_SUMMARY } from 'data/route/actions'
import { getCurrentOrderProductsIds } from 'data/order/selectors'
import { Paper } from 'components/Paper'
import { Separator } from 'components/Separator'
import { ProductEntry } from './ProductEntry'
import { OrderTotal } from './OrderTotal'
import * as styles from './styles'

const mapStateToProps = (state) => ({
  products: getCurrentOrderProductsIds(state),
})

const enhancer = compose(
  connect(mapStateToProps),
  forRoute(ORDER_SUMMARY),
  setDisplayName('OrderSummary'),
)

export const OrderSummary = enhancer(({ products }) => (
  <div className={styles.receiptContainer}>
    <Paper className={styles.receipt}>
      <h2 className={styles.receiptTitle}>
        Este fué tu pedido
      </h2>
      {products.map((id) => (
        <ProductEntry id={id} key={id} />
      ))}
      <Separator />
      <OrderTotal />
    </Paper>
  </div>
))
