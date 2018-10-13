import * as R from 'ramda'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Fraction } from 'fractional'
import { compose, setPropTypes, setDisplayName } from 'recompose'
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
  R.ifElse(
    R.equals('0'),
    R.always('-'),
    R.compose(
      R.invoker(0, 'toString'),
      R.constructN(1, Fraction),
    ),
  ),
  R.prop('amount'),
))
