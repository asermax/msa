import React from 'react'
import PropTypes from 'prop-types'
import { compose, setPropTypes, setDisplayName } from 'recompose'
import * as styles from './styles'

const enhancer = compose(
  setPropTypes({
    total: PropTypes.number.isRequired,
  }),
  setDisplayName('Total'),
)

export const Total = enhancer(({ total }) => (
  <div className={styles.total}>
    <div className={styles.totalTitle}>
      Total
    </div>
    <div>
      ${total}
    </div>
  </div>
))
