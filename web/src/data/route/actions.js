import { NOT_FOUND } from 'redux-first-router'
export { NOT_FOUND } from 'redux-first-router'

export const INDEX = 'route/index'
export const ORDER_SUMMARY = 'route/order_summary'
export const allRoutes = [
  NOT_FOUND, INDEX, ORDER_SUMMARY,
]

export const goToIndex = () => ({
  type: INDEX,
})

export const goToOrderSummary = () => ({
  type: ORDER_SUMMARY,
})
