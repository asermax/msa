import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { forRoute } from 'hocs/forRoute'
import { OPERATIVE_ORDERS, ORDER_DETAILS, ORDER_DELETE } from 'data/route/actions'
import { FluidContainer } from 'components/FluidContainer'
import { OrdersTable } from './OrdersTable'

const enhancer = compose(
  forRoute(OPERATIVE_ORDERS, ORDER_DETAILS, ORDER_DELETE),
  setDisplayName('OperativeOrders'),
)

export const OperativeOrders = enhancer(() => (
  <FluidContainer>
    <OrdersTable />
  </FluidContainer>
))
