import React from 'react'
import PropTypes from 'prop-types'
import { compose, setPropTypes, setDisplayName } from 'recompose'
import { formatFraction } from 'utils'
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
  <div css={styles.productEntry}>
    <div css={styles.productAmount}>
      {formatFraction(amount)}
    </div>
    <div css={styles.productName}>
      <b>{name}</b> <i>x {unit}</i>
    </div>
    <div css={styles.productTotal}>
      ${parseFloat(amount) * parseFloat(price)}
    </div>
  </div>
))
