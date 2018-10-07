import React from 'react'
import PropTypes from 'prop-types'
import { compose, setPropTypes, setDisplayName } from 'recompose'
import * as styles from './styles'

const enhancer = compose(
  setPropTypes({
    orderTotal: PropTypes.number.isRequired,
  }),
  setDisplayName('Total'),
)

export const Total = enhancer(({ orderTotal }) => (
  <div className={styles.total}>
    <div className={styles.totalTitle}>
      Total
    </div>
    <div>
      ${orderTotal}
    </div>
  </div>
))
