import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { getOrderTotal } from 'data/order/selectors'
import { Total as BaseTotal } from 'components/OrderSummary'

const mapStateToProps = (state, { id }) => ({
  total: getOrderTotal(state, id),
})

const enhancer = compose(
  connect(mapStateToProps),
  setDisplayName('Total'),
)

export const Total = enhancer(BaseTotal)
