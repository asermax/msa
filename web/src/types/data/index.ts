import { RouteState } from './route'
import { OrderState } from './order'

export type State = {
  readonly route: RouteState,
  readonly order: OrderState,
}
export * from './route'
export * from './order'
