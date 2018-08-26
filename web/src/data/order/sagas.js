import * as R from 'ramda'
import { put, select, call, all, takeLatest } from 'redux-saga/effects'
import { ORDER_ENTRYPOINT, apiPost } from 'data/api'
import { goToOrderSummary } from 'data/route/actions'
import { CREATE_ORDER_REQUEST, createOrderSuccess, createOrderFailure } from './actions'
import { getOrderUser, getOrderOrganization, getOrderProducts } from './selectors'
import { orderSchema } from './schemas'

const createOrder = function*() {
  const user = yield select(getOrderUser)
  const organization = yield select(getOrderOrganization)
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
      organization,
      products,
    })

    // create the order first
    yield call(apiPost, ORDER_ENTRYPOINT, data)

    yield put(createOrderSuccess())
    yield put(goToOrderSummary())
  } catch(e) {
    yield put(createOrderFailure(e.message))
  }
}


export const orderSaga = function*() {
  yield all([
    takeLatest(CREATE_ORDER_REQUEST, createOrder),
  ])
}
