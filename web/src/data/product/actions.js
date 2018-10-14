export const FETCH_PRODUCTS_REQUEST = 'products/fetch/request'
export const FETCH_PRODUCTS_SUCCESS = 'products/fetch/success'
export const FETCH_PRODUCTS_FAILURE = 'products/fetch/failure'

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS_REQUEST,
})

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products,
})

export const fetchProductsFailure = (reason) => ({
  type: FETCH_PRODUCTS_FAILURE,
  reason,
})
