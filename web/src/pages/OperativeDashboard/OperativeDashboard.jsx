import React, { Fragment } from 'react'
import { compose, setDisplayName } from 'recompose'
import { forRoute } from 'hocs'
import { OPERATIVE_ORDERS, OPERATIVE_PRODUCTS, ORDER_DETAILS } from 'data/route/actions'
import { Tabs } from './Tabs'
import { OperativeOrders } from 'pages/OperativeOrders'
import { OperativeProducts } from 'pages/OperativeProducts'

const enhancer = compose(
  forRoute(OPERATIVE_ORDERS, OPERATIVE_PRODUCTS, ORDER_DETAILS),
  setDisplayName('OperativeDashboard'),
)

export const OperativeDashboard = enhancer(() => (
  <Fragment>
    <h1>
      Detalles del Operativo
    </h1>
    <Tabs />
    <OperativeOrders />
    <OperativeProducts />
  </Fragment>
))
