import * as R from 'ramda'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  compose, branch, renderNothing, flattenProp, setPropTypes, setDisplayName,
} from 'recompose'
import { Product as BaseProduct } from 'components/OrderSummary'
import { getProduct } from 'data/product/selectors'
import { getOrderProductAmount } from 'data/order/selectors'

const mapStateToProps = (state, { orderId, id }) => ({
  product: getProduct(state, id),
  amount: getOrderProductAmount(state, orderId, id),
})

const enhancer = compose(
  connect(mapStateToProps),
  setPropTypes({
    id: PropTypes.number.isRequired,
  }),
  branch(
    R.compose(R.any(R.isNil), R.values),
    renderNothing,
  ),
  flattenProp('product'),
  setDisplayName('Product'),
)

export const Product = enhancer(BaseProduct)
