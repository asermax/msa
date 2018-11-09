export const SET_ORDER_USER = 'order/user/set'
export const SET_ORDER_PRODUCT_AMOUNT = 'order-product/amount/set'
export const CREATE_ORDER_REQUEST = 'order/save/request'
export const CREATE_ORDER_SUCCESS = 'order/save/success'
export const CREATE_ORDER_FAILURE = 'order/save/failure'
export const FETCH_ORDERS_REQUEST = 'orders/fetch/request'
export const FETCH_ORDERS_SUCCESS = 'orders/fetch/success'
export const FETCH_ORDERS_FAILURE = 'orders/fetch/failure'
export const FETCH_ORDER_REQUEST = 'order/fetch/request'
export const FETCH_ORDER_SUCCESS = 'order/fetch/success'
export const FETCH_ORDER_FAILURE = 'order/fetch/failure'
export const DELETE_ORDER_REQUEST = 'order/delete/request'
export const DELETE_ORDER_SUCCESS = 'order/delete/success'
export const DELETE_ORDER_FAILURE = 'order/delete/failure'
export const EDIT_ORDER_REQUEST = 'order/edit/request'
export const EDIT_ORDER_SUCCESS = 'order/edit/success'
export const EDIT_ORDER_FAILURE = 'order/edit/failure'

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
  payload: reason,
})

/**
 * @returns {import('types/data').FetchOrdersRequestAction}
 */
export const fetchOrders = () => ({
  type: FETCH_ORDERS_REQUEST,
})

/**
 * @param {import('types/data').OrderList} orders
 * @returns {import('types/data').FetchOrdersSuccessAction}
 */
export const fetchOrdersSuccess = (orders) => ({
  type: FETCH_ORDERS_SUCCESS,
  payload: orders,
})

/**
 * @param {string} reason - reason of the failure
 * @returns {import('types/data').FetchOrdersFailureAction}
 */
export const fetchOrdersFailure = (reason) => ({
  type: FETCH_ORDERS_FAILURE,
  payload: reason,
})

/**
 * @param {string} id - order id
 * @returns {import('types/data').FetchOrderRequestAction}
 */
export const fetchOrder = (id) => ({
  type: FETCH_ORDER_REQUEST,
  payload: id,
})

/**
 * @param {import('types/data').Order} order
 * @returns {import('types/data').FetchOrderSuccessAction}
 */
export const fetchOrderSuccess = (order) => ({
  type: FETCH_ORDER_SUCCESS,
  payload: order,
})

/**
 * @param {string} reason - reason of the failure
 * @returns {import('types/data').FetchOrderFailureAction}
 */
export const fetchOrderFailure = (reason) => ({
  type: FETCH_ORDER_FAILURE,
  payload: reason,
})

/**
 * @param {string} id - order id
 * @returns {import('types/data').DeleteOrderRequestAction}
 */
export const deleteOrder = (id) => ({
  type: DELETE_ORDER_REQUEST,
  payload: id,
})

/**
 * @param {string} id - order id
 * @returns {import('types/data').DeleteOrderSuccessAction}
 */
export const deleteOrderSuccess = (id) => ({
  type: DELETE_ORDER_SUCCESS,
  payload: id,
})

/**
 * @param {string} reason - reason of the failure
 * @returns {import('types/data').DeleteOrderFailureAction}
 */
export const deleteOrderFailure = (reason) => ({
  type: DELETE_ORDER_FAILURE,
  payload: reason,
})

/**
 * @param {string} id - order id
 * @param {Partial<import('types/data').Order>} changes - changes to be made on the order
 * @returns {import('types/data').EditOrderRequestAction}
 */
export const editOrder = (id, changes) => ({
  type: EDIT_ORDER_REQUEST,
  payload: {
    id,
    changes,
  },
})

/**
 * @param {import('types/data').Order} order
 * @returns {import('types/data').EditOrderSuccessAction}
 */
export const editOrderSuccess = (order) => ({
  type: EDIT_ORDER_SUCCESS,
  payload: order,
})

/**
 * @param {string} reason - reason of the failure
 * @returns {import('types/data').EditOrderFailureAction}
 */
export const editOrderFailure = (reason) => ({
  type: EDIT_ORDER_FAILURE,
  payload: reason,
})
