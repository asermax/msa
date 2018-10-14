import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, flattenProp, setPropTypes, setDisplayName } from 'recompose'
import { hideOnMobile } from 'styles/util'
import { goToOrderDetails } from 'data/route/actions'
import { getOrder, getOrderTotal } from 'data/order/selectors'
import { getProductsIds } from 'data/product/selectors'
import { OrderProductAmount } from './OrderProductAmount'
import * as styles from './styles'

const mapStateToProps = (state, { id }) => ({
  productIds: getProductsIds(state),
  order: getOrder(state, id),
  total: getOrderTotal(state, id),
})

const mapDispatchToProps = (dispatch, { id }) => ({
  goToDetail: () => dispatch(goToOrderDetails(id)),
})

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  flattenProp('order'),
  setPropTypes({
    id: PropTypes.number.isRequired,
  }),
  setDisplayName('OrderDetails'),
)

export const OrderDetails = enhancer(({ id, productIds, user, total, goToDetail }) => (
  <tr
    className={styles.detailsRow}
    onClick={goToDetail}
  >
    <td
      className={styles.nameCell}
      title={user}
    >
      {user}
    </td>
    {productIds.map((productId) => (
      <td key={productId} className={`${styles.productCell} ${hideOnMobile}`}>
        <OrderProductAmount orderId={id} productId={productId} />
      </td>
    ))}
    <td className={styles.totalCell}>
      ${total}
    </td>
  </tr>
))
