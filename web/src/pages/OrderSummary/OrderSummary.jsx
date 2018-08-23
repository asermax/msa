import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { forRoute } from 'hocs/forRoute'
import { ORDER_SUMMARY } from 'data/route/actions'

const enhancer = compose(
  forRoute(ORDER_SUMMARY),
  setDisplayName('CreateOrder'),
)

export const OrderSummary = enhancer(() => (
  <div>
    <h1>
      Summary
    </h1>
  </div>
))
