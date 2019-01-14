import { NOT_FOUND } from 'redux-first-router'
export { NOT_FOUND, redirect } from 'redux-first-router'

export const INDEX = 'route/index'
export const LOGIN = 'route/login'
export const ORDER_CREATE = 'route/order/create'
export const ORDER_SUMMARY = 'route/order/summary'
export const ORDER_DETAILS = 'route/order/details'
export const ORDER_DELETE = 'route/order/delete'
export const OPERATIVE_DASHBOARD = 'route/operative/dashboard'
export const OPERATIVE_ORDERS = 'route/operative/orders'
export const OPERATIVE_PRODUCTS = 'route/operative/products'
export const ALL_ROUTES = [
  NOT_FOUND, INDEX, LOGIN, ORDER_CREATE, ORDER_SUMMARY, ORDER_DETAILS, ORDER_DELETE,
  OPERATIVE_DASHBOARD, OPERATIVE_ORDERS, OPERATIVE_PRODUCTS,
]
export const SET_ROUTE_QUERY_PARAM = 'route/query-param/set'

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

/**
 * @param {string} id - id of the order
 * @param {object} [query] - query parameters to include
 * @return {import('redux-first-router').Action} - routing action
 */
export const goToOrderDetails = (id, query) => ({
  type: ORDER_DETAILS,
  payload: {
    id,
    query,
  },
})

/**
 * @param {string} id - id of the order
 * @param {object} [query] - query parameters to include
 * @return {import('redux-first-router').Action} - routing action
 */
export const goToOrderDelete = (id, query) => ({
  type: ORDER_DELETE,
  payload: {
    id,
    query,
  },
})

export const goToOperativeDashboard = () => ({
  type: OPERATIVE_DASHBOARD,
})

/**
 * @param {object} [query] - query parameters to include
 * @return {import('redux-first-router').Action} - routing action
 */
export const goToOperativeOrders = (query) => ({
  type: OPERATIVE_ORDERS,
  payload: {
    query,
  },
})

export const goToOperativeProducts = () => ({
  type: OPERATIVE_PRODUCTS,
})

export const setRouteQueryParam = (name, value, sticky = false) => ({
  type: SET_ROUTE_QUERY_PARAM,
  payload: {
    name,
    value,
    sticky,
  },
})
