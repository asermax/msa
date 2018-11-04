import * as R from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'
import CloseOnEscape from 'react-close-on-escape'
import { Centered } from 'components/Centered'
import * as styles from './styles'

const ifCurrentTarget = R.when(
  R.compose(
    R.apply(R.equals),
    R.values,
    R.pick([ 'target', 'currentTarget' ]),
  ),
)

export const Modal = ({ children, onClose }) => (
  <CloseOnEscape onEscape={onClose}>
    <div css={styles.backdrop}>
      <Centered
        onClick={ifCurrentTarget(onClose)}
      >
        {children}
      </Centered>
    </div>
  </CloseOnEscape>
)

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
}
