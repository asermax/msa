import React from 'react'
import { Container } from 'components/Container'
import { OrderCreate } from 'pages/OrderCreate'
import { OrderSummary } from 'pages/OrderSummary'
import { OrderDetails } from 'pages/OrderDetails'
import { OperativeDashboard } from 'pages/OperativeDashboard'

export const App = () => (
  <Container>
    <OrderCreate />
    <OrderSummary />
    <OperativeDashboard />
    <OrderDetails />
  </Container>
)
