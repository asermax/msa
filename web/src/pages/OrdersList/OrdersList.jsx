import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { forRoute } from 'hocs/forRoute'
import { ORDERS_LIST } from 'data/route/actions'
import { OrdersTable } from './OrdersTable'
import { ProductsTable } from './ProductsTable'

const enhancer = compose(
  forRoute(ORDERS_LIST),
  setDisplayName('OrdersList'),
)

export const OrdersList = enhancer(() => (
  <div>
    <OrdersTable />
    <ProductsTable />
  </div>
))
