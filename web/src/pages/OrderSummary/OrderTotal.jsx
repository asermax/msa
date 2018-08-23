import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { css } from 'emotion'
import { getOrderTotal } from 'data/order/selectors'

const mapStateToProps = (state) => ({
  orderTotal: getOrderTotal(state),
})

const enhancer = compose(
  connect(mapStateToProps),
  setDisplayName('OrderForm'),
)

export const OrderTotal = enhancer(({ orderTotal }) => (
  <div className={total}>
    <div className={totalTitle}>
      Total
    </div>
    <div>
      ${orderTotal}
    </div>
  </div>
))

const total = css`
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`

const totalTitle = css`
  padding-left: 10%;
  flex-grow: 1;
`
