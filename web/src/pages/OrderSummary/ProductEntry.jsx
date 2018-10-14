import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, flattenProp, setPropTypes, setDisplayName } from 'recompose'
import { Product } from 'components/OrderSummary'
import { getProduct } from 'data/product/selectors'
import { getCurrentOrderProductAmount } from 'data/order/selectors'

const mapStateToProps = (state, { id }) => ({
  product: getProduct(state, id),
  amount: getCurrentOrderProductAmount(state, id),
})

const enhancer = compose(
  connect(mapStateToProps),
  setPropTypes({
    id: PropTypes.string.isRequired,
  }),
  flattenProp('product'),
  setDisplayName('ProductEntry'),
)

export const ProductEntry = enhancer(Product)
