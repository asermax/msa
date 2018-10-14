import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { forRoute } from 'hocs/forRoute'
import { ORDER_CREATE } from 'data/route/actions'
import { Container } from 'components/Container'
import { OrderForm } from './OrderForm'

const enhancer = compose(
  forRoute(ORDER_CREATE),
  setDisplayName('OrderCreate'),
)

export const OrderCreate = enhancer(() => (
  <Container>
    <h1>
      Enviar Orden
    </h1>
    <p>
      Complete el siguiente formulario para hacer una orden.
    </p>
    <OrderForm />
  </Container>
))
