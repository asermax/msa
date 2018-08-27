import { NOT_FOUND } from 'redux-first-router'
export { NOT_FOUND, redirect } from 'redux-first-router'

export const INDEX = 'route/index'
export const ORDER_CREATE = 'route/order/create'
export const ORDER_SUMMARY = 'route/order/summary'
export const ORDERS_LIST = 'route/orders/list'
export const ALL_ROUTES = [
  NOT_FOUND, INDEX, ORDER_CREATE, ORDER_SUMMARY, ORDERS_LIST,
]

export const goToIndex = () => ({
  type: INDEX,
})

export const goToOrderCreate = () => ({
  type: ORDER_CREATE,
})

export const goToOrderSummary = () => ({
  type: ORDER_SUMMARY,
})

export const goToOrdersList = () => ({
  type: ORDERS_LIST,
})
