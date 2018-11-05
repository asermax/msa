import * as R from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, withHandlers, flattenProp, setPropTypes, setDisplayName } from 'recompose'
import { hideOnMobile } from 'styles/util'
import { goToOrderDetails } from 'data/route/actions'
import { getQuery } from 'data/route/selectors'
import { getOrder, getOrderTotal } from 'data/order/selectors'
import { getProductsIds } from 'data/product/selectors'
import { OrderProductAmount } from './OrderProductAmount'
import * as styles from './styles'

const mapStateToProps = (state, { id }) => ({
  productIds: getProductsIds(state),
  order: getOrder(state, id),
  total: getOrderTotal(state, id),
  query: getQuery(state),
})

const mapDispatchToProps = (dispatch, { id }) => ({
  goToDetail: (query) => dispatch(goToOrderDetails(id, query)),
})

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    goToDetail: ({ query, goToDetail }) => R.partial(goToDetail, [ query ]),
  }),
  flattenProp('order'),
  setPropTypes({
    id: PropTypes.number.isRequired,
  }),
  setDisplayName('OrderDetails'),
)

export const OrderDetails = enhancer(({ id, productIds, user, total, goToDetail }) => (
  <tr
    css={styles.detailsRow}
    onClick={goToDetail}
  >
    <td
      css={styles.nameCell}
      title={user}
    >
      {user}
    </td>
    {productIds.map((productId) => (
      <td key={productId} css={[ styles.productCell, hideOnMobile ]}>
        <OrderProductAmount orderId={id} productId={productId} />
      </td>
    ))}
    <td css={styles.totalCell}>
      ${total}
    </td>
  </tr>
))
