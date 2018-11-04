/* globals module */
import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withState } from '@dump247/storybook-state'
import { action } from '@storybook/addon-actions'
import { ConfirmationDialog } from 'components/ConfirmationDialog'

storiesOf('Confirmation Dialog', module)
  .add('basic dialog', withState({ open: false })(({ store }) =>  (
    <Fragment>
      <button onClick={() => store.set({ open: true })}>
        Show dialog
      </button>
      {store.state.open ? (
        <ConfirmationDialog
          onCancel={() => store.set({ open: false })}
          onConfirm={() => { action('confirm!')(); store.set({ open: false }) }}
        >
          Are you sure you want to do that thing?
        </ConfirmationDialog>
      ) : null}
    </Fragment>
  )))
