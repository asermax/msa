import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { getProductsIds } from 'data/product/selectors'
import { ProductDetails } from './ProductDetails'

const mapStateToProps = (state) => ({
  products: getProductsIds(state),
})

const enhancer = compose(
  connect(mapStateToProps),
  setDisplayName('ProductsTable'),
)

export const ProductsTable = enhancer(({ products }) => (
  <table>
    <thead>
      <tr>
        <th>
          Nombre
        </th>
        <th>
          Entero
        </th>
        <th>
          Fracción (1/2)
        </th>
      </tr>
    </thead>
    <tbody>
      {products.map((id) => (
        <ProductDetails key={id} id={id} />
      ))}
    </tbody>
  </table>
))
