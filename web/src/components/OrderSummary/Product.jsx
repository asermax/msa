import React from 'react'
import PropTypes from 'prop-types'
import { compose, setPropTypes, setDisplayName } from 'recompose'
import * as styles from './styles'

const enhancer = compose(
  setPropTypes({
    name: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
  }),
  setDisplayName('Product'),
)

export const Product = enhancer(({ name, unit, price, amount }) => (
  <div className={styles.productEntry}>
    <div className={styles.productAmount}>
      {amount}
    </div>
    <div className={styles.productName}>
      <b>{name}</b> <i>x {unit}</i>
    </div>
    <div className={styles.productTotal}>
      ${parseFloat(amount) * parseFloat(price)}
    </div>
  </div>
))
