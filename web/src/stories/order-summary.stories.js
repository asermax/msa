/* globals module */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Summary, Title, Products, Product, Total } from 'components/OrderSummary'

const products = [
  {
    name: 'Producto 1',
    unit: 'bolsa 1 kg',
    price: 30,
    amount: 2,
  },
  {
    name: 'Producto 2',
    unit: 'paquete 500 g',
    price: 15,
    amount: 10,
  },
]
storiesOf('Order Summary', module)
  .add('with products', () => (
    <Summary>
      <Title slot="title">
        Esta fué tu orden
      </Title>
      <Products slot="products">
        {products.map((product) => (
          <Product key={product.name} {...product} />
        ))}
      </Products>
      <Total slot="total" orderTotal={210} />
    </Summary>
  ))
