import React, { Fragment } from 'react'
import { OrderCreate } from 'pages/OrderCreate'
import { OrderSummary } from 'pages/OrderSummary'
import { OrderDetails } from 'pages/OrderDetails'
import { OperativeDashboard } from 'pages/OperativeDashboard'

export const App = () => (
  <Fragment>
    <OrderCreate />
    <OrderSummary />
    <OperativeDashboard />
    <OrderDetails />
  </Fragment>
)
