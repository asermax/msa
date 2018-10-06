// @flow
import React from 'react'
import { compose, mapProps, type HOC } from 'recompose'
import { connect } from 'react-redux'
import type { State } from 'data/types'
import type { Order } from 'data/order/types'
import { getOrder } from 'data/order/selectors'

type Props = {
  orderId: string,
}
type StateProps = {
  order: Order,
}
type EnhancedProps = {
  user: string,
}

const mapStateToProps = (state: State, { orderId }: Props): StateProps => ({
  order: getOrder(state, orderId),
})

const connector: HOC<StateProps, Props> = connect(mapStateToProps)
const enhancer: HOC<EnhancedProps, Props> = compose(
  connector,
  mapProps(({ order }: StateProps) => ({
    user: order.user,
  })),
)

export const OrderSummary = enhancer(({ user }: EnhancedProps) => (
  <div>
    Hello {user}
  </div>
))
