import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { forRoute } from 'hocs/forRoute'
import { INDEX } from 'data/route/actions'
import { OrderForm } from './OrderForm'

const enhancer = compose(
  forRoute(INDEX),
  setDisplayName('CreateOrder'),
)

export const CreateOrder = enhancer(() => (
  <div>
    <h1>
      Enviar Orden
    </h1>
    <p>
      Complete el siguiente formulario para hacer una orden.
    </p>
    <OrderForm />
  </div>
))
