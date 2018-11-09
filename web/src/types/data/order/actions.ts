import { EmptyAction, PayloadAction } from 'types/data/action'
import { Order, OrderList } from './state'

export type FetchOrdersRequestAction = EmptyAction<'orders/fetch/request'>
export type FetchOrdersSuccessAction = PayloadAction<'orders/fetch/success', OrderList>
export type FetchOrdersFailureAction = PayloadAction<'orders/fetch/failure', string>
export type FetchOrderRequestAction = PayloadAction<'order/fetch/request', string>
export type FetchOrderSuccessAction = PayloadAction<'order/fetch/success', Order>
export type FetchOrderFailureAction = PayloadAction<'order/fetch/failure', string>
export type DeleteOrderRequestAction = PayloadAction<'order/delete/request', string>
export type DeleteOrderSuccessAction = PayloadAction<'order/delete/success', string>
export type DeleteOrderFailureAction = PayloadAction<'order/delete/failure', string>

type EditOrderPayload = {
  readonly id: string
  readonly changes: Partial<Order>
}
export type EditOrderRequestAction = PayloadAction<'order/edit/request', EditOrderPayload>
export type EditOrderSuccessAction = PayloadAction<'order/edit/success', Order>
export type EditOrderFailureAction = PayloadAction<'order/edit/failure', string>

export type OrderAction = FetchOrdersRequestAction
  | FetchOrdersSuccessAction
  | FetchOrdersFailureAction
  | FetchOrderRequestAction
  | FetchOrderSuccessAction
  | FetchOrderFailureAction
  | DeleteOrderRequestAction
  | DeleteOrderSuccessAction
  | DeleteOrderFailureAction
  | EditOrderRequestAction
  | EditOrderSuccessAction
  | EditOrderFailureAction
