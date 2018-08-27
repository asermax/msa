import React from 'react'
import { Container } from 'components/Container'
import { OrderCreate } from 'pages/OrderCreate'
import { OrderSummary } from 'pages/OrderSummary'

export const App = () => (
  <Container>
    <OrderCreate />
    <OrderSummary />
  </Container>
)
