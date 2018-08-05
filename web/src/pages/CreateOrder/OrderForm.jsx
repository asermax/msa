import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { css } from 'emotion'
import { getProductIds } from 'data/product/selectors'
import { hideOnMobile, mq } from 'styles/util'
import { ProductField } from './ProductField'
import { OrderTotal } from './OrderTotal'

const mapStateToProps = (state) => ({
  products: getProductIds(state),
})

const enhancer = compose(
  connect(mapStateToProps),
  setDisplayName('OrderForm'),
)

export const OrderForm = enhancer(({ products }) => (
  <form>
    <fieldset>
      <label htmlFor="name">
      Nombre*
      </label>
      <input type="text" name="name" />
    </fieldset>
    <fieldset>
      <h2>Productos</h2>
      <table>
        <thead>
          <tr>
            <th>
              Producto
            </th>
            <th className={hideOnMobile}>
            </th>
            <th>
              Cantidad
            </th>
            <th className={hideOnMobile}>
              Precio
            </th>
            <th>
              TOTAL
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((id) => <ProductField key={id} id={id} />)}
          <OrderTotal />
        </tbody>
      </table>
    </fieldset>
    <div className={buttonContainer}>
      <button type="submit">
        Enviar Orden
      </button>
    </div>
  </form>
))

const buttonContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mq.mobile} {
    align-items: end;
  }
`
