import React, { Fragment } from 'react'
import { Global } from '@emotion/core'
import { globalStyles } from 'styles/global'
import { Login } from 'pages/Login'
import { OrderCreate } from 'pages/OrderCreate'
import { OrderSummary } from 'pages/OrderSummary'
import { OrderDetails } from 'pages/OrderDetails'
import { OrderDelete } from 'pages/OrderDelete'
import { OperativeDashboard } from 'pages/OperativeDashboard'

export const App = () => (
  <Fragment>
    <Global styles={globalStyles} />
    <Login />
    <OrderCreate />
    <OrderSummary />
    <OperativeDashboard />
    <OrderDetails />
    <OrderDelete />
  </Fragment>
)
