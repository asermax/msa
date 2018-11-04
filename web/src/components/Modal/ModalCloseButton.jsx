import React from 'react'
import PropTypes from 'prop-types'
import { compose, setPropTypes, setDisplayName } from 'recompose'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as styles from './styles'

const enhancer = compose(
  setPropTypes({
    onClose: PropTypes.func.isRequired,
  }),
  setDisplayName('ModalCloseButton'),
)

export const ModalCloseButton = enhancer(({ onClose }) => (
  <FontAwesomeIcon
    icon="times"
    size="lg"
    css={styles.close}
    onClick={onClose}
  />
))
