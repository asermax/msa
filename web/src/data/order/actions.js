export const SET_ORDER_USER = 'order/user/set'
export const SET_ORDER_PRODUCT_AMOUNT = 'order-product/amount/set'

export const setOrderUser = (user) => ({
  type: SET_ORDER_USER,
  user,
})

export const setOrderProductAmount = (id, amount) => ({
  type: SET_ORDER_PRODUCT_AMOUNT,
  id,
  amount,
})
