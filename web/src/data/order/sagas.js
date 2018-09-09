// @flow
import * as R from 'ramda'
import * as RA from 'ramda-adjunct'
import type { Saga } from 'redux-saga'
import { put, select, call, all, takeLatest } from 'redux-saga/effects'
import { ORDER_ENTRYPOINT, apiGet, apiPost } from 'data/api'
import { goToOrderSummary } from 'data/route/actions'
import { getQuery } from 'data/route/selectors'
import {
  CREATE_ORDER_REQUEST, createOrderSuccess, createOrderFailure,
  FETCH_ORDERS_REQUEST, fetchOrdersSuccess, fetchOrdersFailure,
} from './actions'
import {
  getCurrentOrderUser, getCurrentOrderOrganization, getCurrentOrderProducts,
} from './selectors'
import { orderSchema } from './schemas'

const createOrder: () => Saga<*> = function*() {
  const user = yield select(getCurrentOrderUser)
  const organization = yield select(getCurrentOrderOrganization)
  const products = yield select(getCurrentOrderProducts)

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

const fetchOrders: () => Saga<*> = function*() {
  const query = yield select(getQuery)

  try {
    // fetch the orders for the given organization
    const orders = yield call(
      apiGet,
      ORDER_ENTRYPOINT,
      R.when(
        R.compose(R.not, R.isNil),
        RA.renameKeys({ org: 'organization' }),
      )(query),
    )

    yield put(fetchOrdersSuccess(orders))
  } catch(e) {
    yield put(fetchOrdersFailure(e.message))
  }
}

export const orderSaga: () => Saga<*> = function*() {
  yield all([
    takeLatest(CREATE_ORDER_REQUEST, createOrder),
    takeLatest(FETCH_ORDERS_REQUEST, fetchOrders),
  ])
}
