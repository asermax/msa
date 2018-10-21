import { NOT_FOUND } from 'redux-first-router'
export { NOT_FOUND, redirect } from 'redux-first-router'

export const INDEX = 'route/index'
export const LOGIN = 'route/login'
export const ORDER_CREATE = 'route/order/create'
export const ORDER_SUMMARY = 'route/order/summary'
export const ORDER_DETAILS = 'route/order/details'
export const OPERATIVE_DASHBOARD = 'route/operative/dashboard'
export const OPERATIVE_ORDERS = 'route/operative/orders'
export const OPERATIVE_PRODUCTS = 'route/operative/products'
export const ALL_ROUTES = [
  NOT_FOUND, INDEX, LOGIN, ORDER_CREATE, ORDER_SUMMARY, ORDER_DETAILS,
  OPERATIVE_DASHBOARD, OPERATIVE_ORDERS, OPERATIVE_PRODUCTS,
]

export const goToIndex = () => ({
  type: INDEX,
})

export const goToLogin = () => ({
  type: LOGIN,
})

export const goToOrderCreate = () => ({
  type: ORDER_CREATE,
})

export const goToOrderSummary = () => ({
  type: ORDER_SUMMARY,
})

export const goToOrderDetails = (id) => ({
  type: ORDER_DETAILS,
  payload: {
    id,
  },
})

export const goToOperativeDashboard = () => ({
  type: OPERATIVE_DASHBOARD,
})

export const goToOperativeOrders = () => ({
  type: OPERATIVE_ORDERS,
})

export const goToOperativeProducts = () => ({
  type: OPERATIVE_PRODUCTS,
})
