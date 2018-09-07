import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { css } from 'emotion'
import { mq } from 'styles/util'
import { forRoute } from 'hocs/forRoute'
import { ORDER_SUMMARY } from 'data/route/actions'
import { getCurrentOrderProductsIds } from 'data/order/selectors'
import { Paper } from 'components/Paper'
import { Separator } from 'components/Separator'
import { ProductEntry } from './ProductEntry'
import { OrderTotal } from './OrderTotal'

const mapStateToProps = (state) => ({
  products: getCurrentOrderProductsIds(state),
})

const enhancer = compose(
  connect(mapStateToProps),
  forRoute(ORDER_SUMMARY),
  setDisplayName('OrderSummary'),
)

export const OrderSummary = enhancer(({ products }) => (
  <div className={receiptContainer}>
    <Paper className={receipt}>
      <h2 className={receiptTitle}>
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

const receiptContainer = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const receipt = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  ${mq.mobile} {
    width: 50%;
  }
`

const receiptTitle = css`
  text-align: center;
  padding: 0 0 2rem;
`
