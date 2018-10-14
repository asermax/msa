import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { forRoute } from 'hocs/forRoute'
import { OPERATIVE_ORDERS, ORDER_DETAILS } from 'data/route/actions'
import { OrdersTable } from './OrdersTable'

const enhancer = compose(
  forRoute(OPERATIVE_ORDERS, ORDER_DETAILS),
  setDisplayName('OperativeOrders'),
)

export const OperativeOrders = enhancer(() => (
  <OrdersTable />
))
