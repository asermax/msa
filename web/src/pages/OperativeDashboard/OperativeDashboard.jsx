import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { forRoute } from 'hocs'
import { OPERATIVE_ORDERS, OPERATIVE_PRODUCTS } from 'data/route/actions'
import { Tabs } from './Tabs'
import { OperativeOrders } from 'pages/OperativeOrders'
import { OperativeProducts } from 'pages/OperativeProducts'

const enhancer = compose(
  forRoute(OPERATIVE_ORDERS, OPERATIVE_PRODUCTS),
  setDisplayName('OperativeDashboard'),
)

export const OperativeDashboard = enhancer(() => (
  <div>
    <h1>
      Detalles del Operativo
    </h1>
    <Tabs />
    <OperativeOrders />
    <OperativeProducts />
  </div>
))
