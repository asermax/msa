import * as R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'
import { compose, flattenProp, withHandlers, setDisplayName } from 'recompose'
import { forRoute } from 'hocs'
import { ORDER_DELETE, goToOrderDetails, goToOperativeOrders } from 'data/route/actions'
import { getQuery, getParameter } from 'data/route/selectors'
import { deleteOrder } from 'data/order/actions'
import { getOrder } from 'data/order/selectors'
import { ConfirmationDialog } from 'components/ConfirmationDialog'

const mapStateToProps = (state) => ({
  order: getOrder(state, getParameter(state, 'id')),
  query: getQuery(state),
})

const mapDispatchToProps = (dispatch) => ({
  goToOrder: (orderId, query) => dispatch(goToOrderDetails(orderId, query)),
  goToOrders: (query) => dispatch(goToOperativeOrders(query)),
  deleteOrder: (orderId) => dispatch(deleteOrder(orderId)),
})

const enhancer = compose(
  forRoute(ORDER_DELETE),
  connect(mapStateToProps, mapDispatchToProps),
  flattenProp('order'),
  withHandlers({
    onCancel: ({ id, query, goToOrder }) => R.partial(goToOrder, [ id, query ]),
    onConfirm: ({ id, query, goToOrders, deleteOrder }) => R.compose(
      R.partial(deleteOrder, [ id ]),
      R.partial(goToOrders, [ query ]),
    ),
  }),
  setDisplayName('OrderDelete'),
)

export const OrderDelete = enhancer(({ user, onCancel, onConfirm }) => (
  <ConfirmationDialog
    onCancel={onCancel}
    onConfirm={onConfirm}
  >
    ¿Eliminar orden de {user}?
  </ConfirmationDialog>
))
