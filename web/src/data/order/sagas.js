import * as R from 'ramda'
import * as RA from 'ramda-adjunct'
import { put, select, call, all, takeLatest } from 'redux-saga/effects'
import { ORDER_ENTRYPOINT, apiGet, apiPost, apiDelete, apiPatch } from 'data/api'
import { goToOrderSummary } from 'data/route/actions'
import { getQueryParameters } from 'data/route/selectors'
import {
  CREATE_ORDER_REQUEST, createOrderSuccess, createOrderFailure,
  FETCH_ORDERS_REQUEST, fetchOrdersSuccess, fetchOrdersFailure,
  FETCH_ORDER_REQUEST, fetchOrderSuccess, fetchOrderFailure,
  DELETE_ORDER_REQUEST, deleteOrderSuccess, deleteOrderFailure,
  EDIT_ORDER_REQUEST, editOrderSuccess, editOrderFailure,
} from './actions'
import {
  getCurrentOrderUser, getCurrentOrderOrganization, getCurrentOrderProducts,
} from './selectors'
import { orderSchema } from './schemas'

const createOrder = function*() {
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

const fetchOrders = function*() {
  const params = R.compose(
    R.mapObjIndexed(R.split('|')), // multi-value filters are joined with |
    R.pick([ 'org' ]),
  )(yield select(getQueryParameters))

  try {
    // fetch the orders for the given organization
    const orders = yield call(
      apiGet,
      ORDER_ENTRYPOINT,
      R.when(
        R.compose(R.not, R.isNil),
        R.compose(
          R.objOf('params'),
          RA.renameKeys({ org: 'organization' }),
        ),
      )(params),
    )

    yield put(fetchOrdersSuccess(orders))
  } catch(e) {
    yield put(fetchOrdersFailure(e.message))
  }
}

const fetchOrder = function*(action) {
  const orderId = action.payload

  try {
    // fetch the orders for the given organization
    const order = yield call(apiGet, ORDER_ENTRYPOINT, { segments: [ orderId ] })

    yield put(fetchOrderSuccess(order))
  } catch(e) {
    yield put(fetchOrderFailure(e.message))
  }
}

/**
 * @param {import('types/data').DeleteOrderRequestAction} action
 */
const deleteOrder = function*(action) {
  const orderId = action.payload

  try {
    yield call(apiDelete, ORDER_ENTRYPOINT, { segments: [ orderId ] })

    yield put(deleteOrderSuccess(orderId))
  } catch(e) {
    yield put(deleteOrderFailure(e.message))
  }
}

/**
 * @param {import('types/data').EditOrderRequestAction} action
 */
const editOrder = function*(action) {
  const { id, changes } = action.payload

  try {
    const order = yield call(apiPatch, ORDER_ENTRYPOINT, changes, { segments: [ id ] })

    yield put(editOrderSuccess(order))
  } catch(e) {
    yield put(editOrderFailure(e.message))
  }
}

export const orderSaga = function*() {
  yield all([
    takeLatest(CREATE_ORDER_REQUEST, createOrder),
    takeLatest(FETCH_ORDERS_REQUEST, fetchOrders),
    takeLatest(FETCH_ORDER_REQUEST, fetchOrder),
    takeLatest(DELETE_ORDER_REQUEST, deleteOrder),
    takeLatest(EDIT_ORDER_REQUEST, editOrder),
  ])
}
