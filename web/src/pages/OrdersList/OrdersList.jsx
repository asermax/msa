import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { forRoute } from 'hocs/forRoute'
import { ORDERS_LIST } from 'data/route/actions'

const enhancer = compose(
  forRoute(ORDERS_LIST),
  setDisplayName('OrdersList'),
)

export const OrdersList = enhancer(() => (
  <div>
    <h1>
      Ordenes
    </h1>
  </div>
))
