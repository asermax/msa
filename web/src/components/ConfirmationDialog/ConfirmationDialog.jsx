import React from 'react'
import PropTypes from 'prop-types'
import { Modal, ModalBody, ModalHeader, ModalCloseButton } from 'components/Modal'
import { Button } from 'components/Button'
import * as styles from './styles'

/**
 * @typedef {{
 *   children: import('react').ReactNode,
 *   confirmText?: string,
 *   cancelText?: string,
 *   onConfirm: () => void,
 *   onCancel: () => void
 * }} Props
 * @param {Props} props - component props
 */
export const ConfirmationDialog = ({ children, confirmText, cancelText, onConfirm, onCancel }) => (
  <Modal
    onClose={onCancel}
  >
    <ModalBody css={styles.dialog}>
      <ModalHeader>
        <div />
        <ModalCloseButton onClose={onCancel} />
      </ModalHeader>
      {children}
      <div css={styles.buttons}>
        <Button
          css={styles.button}
          onClick={onCancel}
          outlined
        >
          {cancelText}
        </Button>
        <Button
          css={styles.button}
          onClick={onConfirm}
        >
          {confirmText}
        </Button>
      </div>
    </ModalBody>
  </Modal>
)

ConfirmationDialog.propTypes = {
  children: PropTypes.node.isRequired,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

ConfirmationDialog.defaultProps = {
  confirmText: 'Continuar',
  cancelText: 'Cancelar',
}
