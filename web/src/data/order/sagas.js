import * as R from 'ramda'
import { put, select, call, all, takeLatest } from 'redux-saga/effects'
import { ORDER_ENTRYPOINT, apiPost } from 'data/api'
import { CREATE_ORDER_REQUEST, createOrderSuccess, createOrderFailure } from './actions'
import { getOrderProducts, getOrderUser } from './selectors'
import { orderSchema } from './schemas'

const createOrder = function*() {
  const user = yield select(getOrderUser)
  const products = yield select(getOrderProducts)

  try {
    const data =  R.compose(
      R.evolve({
        products: R.compose( // transform products object into an array
          R.values,
          R.mapObjIndexed((amount, product) => ({ product, amount })),
        ),
      }),
      R.bind(orderSchema.cast, orderSchema), // validate and cast data
    )({
      user,
      products,
    })

    // create the order first
    yield call(apiPost, ORDER_ENTRYPOINT, data)

    yield put(createOrderSuccess())
  } catch(e) {
    yield put(createOrderFailure(e.message))
  }
}


export const orderSaga = function*() {
  yield all([
    takeLatest(CREATE_ORDER_REQUEST, createOrder),
  ])
}
