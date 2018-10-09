import React from 'react'
import { Container } from 'components/Container'
import { OrderCreate } from 'pages/OrderCreate'
import { OrderSummary } from 'pages/OrderSummary'
import { OrdersList } from 'pages/OrdersList'
import { OrderDetails } from 'pages/OrderDetails'

export const App = () => (
  <Container>
    <OrderCreate />
    <OrderSummary />
    <OrdersList />
    <OrderDetails />
  </Container>
)
