// @flow
import type { ProducerState } from './producer/types'
import type { OrderState } from './order/types'
import type { RouteState } from './route/types'

// whole state type
export type State = {
  producer: ProducerState,
  order: OrderState,
  route: RouteState,
}
