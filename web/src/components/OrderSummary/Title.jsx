import React from 'react'
import PropTypes from 'prop-types'
import { compose, setPropTypes, setDisplayName } from 'recompose'
import * as styles from './styles'

const enhancer = compose(
  setPropTypes({
    children: PropTypes.node.isRequired,
  }),
  setDisplayName('Title'),
)

export const Title = enhancer(({ children }) => (
  <h2 className={styles.receiptTitle}>
    {children}
  </h2>
))
