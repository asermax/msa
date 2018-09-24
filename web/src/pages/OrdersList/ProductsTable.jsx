// @flow
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

type Props = {
  products: Array<string>,
}

export const ProductsTable = enhancer(({ products }: Props) => (
  <Fragment>
    <h1>
      Productos
    </h1>
    <table>
      <thead>
        <tr>
          <th>
            Nombre
          </th>
          <th>
            Fracción (1/2)
          </th>
          <th>
            Entero
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((id) => (
          <ProductDetails key={id} id={id} />
        ))}
      </tbody>
    </table>
  </Fragment>
))
