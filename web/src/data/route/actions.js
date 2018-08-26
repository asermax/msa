import { NOT_FOUND } from 'redux-first-router'
export { NOT_FOUND } from 'redux-first-router'

export const INDEX = 'route/index'
export const ORDER_CREATE = 'route/order/create'
export const ORDER_SUMMARY = 'route/order/summary'
export const allRoutes = [
  NOT_FOUND, INDEX, ORDER_CREATE, ORDER_SUMMARY,
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
