import React from 'react'
import { Container } from 'components/Container'
import { CreateOrder } from 'pages/CreateOrder'
import { OrderSummary } from 'pages/OrderSummary'

export const App = () => (
  <Container>
    <CreateOrder />
    <OrderSummary />
  </Container>
)
