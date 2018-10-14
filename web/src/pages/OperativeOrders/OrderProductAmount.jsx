import * as R from 'ramda'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, setPropTypes, setDisplayName } from 'recompose'
import { formatFraction } from 'utils'
import { getOrderProductAmount } from 'data/order/selectors'

const mapStateToProps = (state, { orderId, productId }) => ({
  amount: getOrderProductAmount(state, orderId, productId),
})

const enhancer = compose(
  connect(mapStateToProps),
  setPropTypes({
    orderId: PropTypes.number.isRequired,
    productId: PropTypes.number.isRequired,
  }),
  setDisplayName('OrderProductAmount'),
)

export const OrderProductAmount = enhancer(R.compose(
  formatFraction,
  R.prop('amount'),
))
