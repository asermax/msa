import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Backdrop } from './Backdrop'
import { Content } from './Content'

export const Modal = ({ children, onClose }) => (
  <Fragment>
    <Backdrop onClick={onClose}>
    </Backdrop>
    <Content>
      {children}
    </Content>
  </Fragment>
)

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
}
