import React from 'react'
import PropTypes from 'prop-types'
import { compose, setPropTypes, setDisplayName } from 'recompose'
import * as styles from './styles'

const enhancer = compose(
  setPropTypes({
    children: PropTypes.node.isRequired,
  }),
  setDisplayName('Products'),
)

export const Products = enhancer(({ children }) => (
  <div css={styles.products}>
    {children}
  </div>
))
