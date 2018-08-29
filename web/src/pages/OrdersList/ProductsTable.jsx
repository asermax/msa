import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { getOrdersIds } from 'data/order/selectors'

const mapStateToProps = (state) => ({
  orders: getOrdersIds(state),
})

const enhancer = compose(
  connect(mapStateToProps),
  setDisplayName('ProductsTable'),
)

export const ProductsTable = enhancer(() => (
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
            Cantidad
          </th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </Fragment>
))
