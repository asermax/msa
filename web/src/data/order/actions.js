export const SET_ORDER_PRODUCT_AMOUNT = 'order-product/amount/set'

export const setOrderProductAmount = (id, amount) => ({
  type: SET_ORDER_PRODUCT_AMOUNT,
  id,
  amount,
})
