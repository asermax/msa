import * as R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'
import {
  compose, branch, renderNothing, withHandlers, flattenProp, setDisplayName,
} from 'recompose'
import { forRoute } from 'hocs'
import { ORDER_DETAILS, goToOperativeOrders, goToOrderDelete } from 'data/route/actions'
import { getParameter, getQuery } from 'data/route/selectors'
import { getOrder } from 'data/order/selectors'
import { Modal, ModalHeader, ModalCloseButton, ModalActions } from 'components/Modal'
import { Summary, Title, Products } from 'components/OrderSummary'
import { Product } from './Product'
import { Total } from './Total'
import * as styles from './styles'

const mapStateToProps = (state) => ({
  order: getOrder(state, getParameter(state, 'id')),
  query: getQuery(state),
})

const mapDispatchToProps = (dispatch) => ({
  onClose: (query) => dispatch(goToOperativeOrders(query)),
  onOrderDelete: (orderId, query) => dispatch(goToOrderDelete(orderId, query)),
})

const enhancer = compose(
  forRoute(ORDER_DETAILS),
  connect(mapStateToProps, mapDispatchToProps),
  branch(
    R.compose(R.isNil, R.prop('order')),
    renderNothing,
  ),
  flattenProp('order'),
  withHandlers({
    onClose: ({ query, onClose }) => R.partial(onClose, [ query ]),
    onOrderDelete: ({ id, query, onOrderDelete }) => R.partial(onOrderDelete, [ id, query ]),
  }),
  setDisplayName('OrderDetails'),
)

export const OrderDetails = enhancer(({ id, user, products, onClose, onOrderDelete }) => (
  <Modal onClose={onClose}>
    <Summary css={styles.details}>
      <ModalHeader>
        <ModalActions
          actions={[
            { name: 'Eliminar Order', action: onOrderDelete },
          ]}
        />
        <ModalCloseButton onClose={onClose} />
      </ModalHeader>
      <Title>
        Pedido de {user}
      </Title>
      <Products>
        {products.map(({ product }) => (
          <Product
            key={product}
            orderId={id}
            id={product}
          />
        ))}
      </Products>
      <Total id={id} />
    </Summary>
  </Modal>
))
