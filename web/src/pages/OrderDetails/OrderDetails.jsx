import * as R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'
import { compose, branch, renderNothing, flattenProp, setDisplayName } from 'recompose'
import { forRoute } from 'hocs'
import { ORDER_DETAILS, goToOrdersList } from 'data/route/actions'
import { getParameter } from 'data/route/selectors'
import { getOrder } from 'data/order/selectors'
import { Modal } from 'components/Modal'
import { Summary, Title, Products } from 'components/OrderSummary'
import { Product } from './Product'
import { Total } from './Total'
import * as styles from './styles'

const mapStateToProps = (state) => ({
  order: getOrder(state, getParameter(state, 'id')),
})

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(goToOrdersList()),
})

const enhancer = compose(
  forRoute(ORDER_DETAILS),
  connect(mapStateToProps, mapDispatchToProps),
  branch(
    R.compose(R.any(R.isNil), R.values),
    renderNothing,
  ),
  flattenProp('order'),
  setDisplayName('OrderDetails'),
)

export const OrderDetails = enhancer(({ id, user, products, onClose }) => (
  <Modal onClose={onClose}>
    <Summary className={styles.details}>
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
