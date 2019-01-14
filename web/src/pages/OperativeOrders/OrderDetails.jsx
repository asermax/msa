import * as R from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, withHandlers, flattenProp, setPropTypes, setDisplayName } from 'recompose'
import { hideOnMobile } from 'styles/util'
import { goToOrderDetails } from 'data/route/actions'
import { getQuery } from 'data/route/selectors'
import { editOrder } from 'data/order/actions'
import { getOrder, getOrderTotalForCurrentProducers } from 'data/order/selectors'
import { getCurrentProducersProductIds } from 'data/producer/selectors'
import { OrderProductAmount } from './OrderProductAmount'
import * as styles from './styles'

const mapStateToProps = (state, { id }) => ({
  productIds: getCurrentProducersProductIds(state),
  order: getOrder(state, id),
  total: getOrderTotalForCurrentProducers(state, id),
  query: getQuery(state),
})

const mapDispatchToProps = (dispatch, { id }) => ({
  editOrderPaid: (paid) => dispatch(editOrder(id, { paid })),
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

export const OrderDetails = enhancer(({
  id, productIds, user, total, paid, editOrderPaid, goToDetail,
}) => (
  <tr
    css={styles.detailsRow}
  >
    <td
      css={styles.nameCell}
      title={user}
      onClick={goToDetail}
    >
      {user}
    </td>
    {productIds.map((productId) => (
      <td
        key={productId}
        css={[ styles.productCell, hideOnMobile ]}
        onClick={goToDetail}
      >
        <OrderProductAmount orderId={id} productId={productId} />
      </td>
    ))}
    <td
      css={styles.totalCell}
      onClick={goToDetail}
    >
      ${total}
    </td>
    <td
      css={styles.paidCell}
    >
      <input
        type="checkbox"
        checked={paid}
        onChange={() => editOrderPaid(!paid)}
      />
    </td>
  </tr>
))
