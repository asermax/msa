import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, flattenProp, setPropTypes, setDisplayName } from 'recompose'
import { getProduct } from 'data/product/selectors'
import { getCurrentOrderProductAmount } from 'data/order/selectors'
import * as styles from './styles'

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

export const ProductEntry = enhancer(({ name, unit, price, amount }) => (
  <div className={styles.productEntry}>
    <div className={styles.productAmount}>
      {amount}
    </div>
    <div className={styles.productName}>
      <b>{name}</b> <i>x {unit}</i>
    </div>
    <div className={styles.productTotal}>
      ${amount * price}
    </div>
  </div>
))
