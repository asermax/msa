export const SET_ORDER_USER = 'order/user/set'
export const SET_ORDER_PRODUCT_AMOUNT = 'order-product/amount/set'
export const CREATE_ORDER_REQUEST = 'order/save/request'
export const CREATE_ORDER_SUCCESS = 'order/save/success'
export const CREATE_ORDER_FAILURE = 'order/save/failure'
export const FETCH_ORDERS_REQUEST = 'orders/fetch/request'
export const FETCH_ORDERS_SUCCESS = 'orders/fetch/success'
export const FETCH_ORDERS_FAILURE = 'orders/fetch/failure'

export const setCurrentOrderUser = (user) => ({
  type: SET_ORDER_USER,
  user,
})

export const setCurrentOrderProductAmount = (id, amount) => ({
  type: SET_ORDER_PRODUCT_AMOUNT,
  id,
  amount,
})

export const createOrder = () => ({
  type: CREATE_ORDER_REQUEST,
})

export const createOrderSuccess = () => ({
  type: CREATE_ORDER_SUCCESS,
})

export const createOrderFailure = (reason) => ({
  type: CREATE_ORDER_FAILURE,
  reason,
})

export const fetchOrders = () => ({
  type: FETCH_ORDERS_REQUEST,
})

export const fetchOrdersSuccess = (orders) => ({
  type: FETCH_ORDERS_SUCCESS,
  payload: orders,
})

export const fetchOrdersFailure = (reason) => ({
  type: FETCH_ORDERS_FAILURE,
  reason,
})
