import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { Total } from 'components/OrderSummary'
import { getCurrentOrderTotal } from 'data/order/selectors'

const mapStateToProps = (state) => ({
  orderTotal: getCurrentOrderTotal(state),
})

const enhancer = compose(
  connect(mapStateToProps),
  setDisplayName('OrderForm'),
)

export const OrderTotal = enhancer(Total)
