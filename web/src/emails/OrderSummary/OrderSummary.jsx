// @flow
import { compose, mapProps, type HOC } from 'recompose'
import { connect } from 'react-redux'
import type { State } from 'data/types'
import type { Order } from 'data/order/types'
import { getOrder } from 'data/order/selectors'
import { Content, type Props as ContentProps } from './Content'

type Props = {
  orderId: string,
}
type StateProps = {
  order: Order,
}

const mapStateToProps = (state: State, { orderId }: Props): StateProps => ({
  order: getOrder(state, orderId),
})

const connector: HOC<StateProps, Props> = connect(mapStateToProps)
const enhancer: HOC<ContentProps, Props> = compose(
  connector,
  mapProps(({ order }: StateProps) => ({
    user: order.user,
  })),
)

export const OrderSummary = enhancer(Content)
