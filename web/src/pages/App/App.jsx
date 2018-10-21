import React, { Fragment } from 'react'
import { Login } from 'pages/Login'
import { OrderCreate } from 'pages/OrderCreate'
import { OrderSummary } from 'pages/OrderSummary'
import { OrderDetails } from 'pages/OrderDetails'
import { OperativeDashboard } from 'pages/OperativeDashboard'

export const App = () => (
  <Fragment>
    <Login />
    <OrderCreate />
    <OrderSummary />
    <OperativeDashboard />
    <OrderDetails />
  </Fragment>
)
