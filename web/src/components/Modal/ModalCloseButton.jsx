import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as styles from './styles'

export const ModalCloseButton = ({ onClose }) => (
  <div
    onClick={onClose}
  >
    <FontAwesomeIcon
      icon="times"
      size="lg"
      css={styles.close}
    />
  </div>
)

ModalCloseButton.propTypes = {
  onClose: PropTypes.func.isRequired,
}
