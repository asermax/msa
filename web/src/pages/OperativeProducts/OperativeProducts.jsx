import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { forRoute } from 'hocs/forRoute'
import { OPERATIVE_PRODUCTS } from 'data/route/actions'
import { ProductsTable } from './ProductsTable'

const enhancer = compose(
  forRoute(OPERATIVE_PRODUCTS),
  setDisplayName('OrdersList'),
)

export const OperativeProducts = enhancer(() => (
  <ProductsTable />
))
