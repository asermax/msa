/* globals module */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Content } from 'emails/OrderSummary/Content'

storiesOf('Email', module)
  .add('Order Summary', () => (
    <Content />
  ))
