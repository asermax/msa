/* globals module */
import React, { Fragment } from 'react'
import { css } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { withState } from '@dump247/storybook-state'
import { action } from '@storybook/addon-actions'
import { Modal, ModalBody, ModalHeader, ModalCloseButton, ModalActions } from 'components/Modal'

storiesOf('Modal', module)
  .add('modal with header', withState({ open: false })(({ store }) =>  (
    <Fragment>
      <button onClick={() => store.set({ open: true })}>
        Show modal
      </button>
      {store.state.open ? (
        <Modal onClose={() => store.set({ open: false })}>
          <ModalBody
            css={css`
              width: 400px;
            `}
          >
            <ModalHeader>
              <ModalActions
                actions={[
                  { name: 'Action 1', action: action('action 1') },
                  { name: 'Action 2', action: action('action 2') },
                  { name: 'Action 3', action: action('action 3') },
                ]}
              />
              <ModalCloseButton onClose={() => store.set({ open: false })} />
            </ModalHeader>
            This is some text under the header
          </ModalBody>
        </Modal>
      ) : null}
    </Fragment>
  )))
