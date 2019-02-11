import { put, call, all, takeLatest } from 'redux-saga/effects'
import { PRODUCT_ENTRYPOINT, apiGet } from 'data/api'
import { FETCH_PRODUCTS_REQUEST, fetchProductsSuccess, fetchProductsFailure } from './actions'

const fetchProducts = function*() {
  try {
    // create the order first
    const products = yield call(
      apiGet,
      PRODUCT_ENTRYPOINT,
      {
        params: { 'order': 'producer,category' },
      },
    )

    yield put(fetchProductsSuccess(products))
  } catch(e) {
    yield put(fetchProductsFailure(e.message))
  }
}


export const productSaga = function*() {
  yield all([
    takeLatest(FETCH_PRODUCTS_REQUEST, fetchProducts),
  ])
}
