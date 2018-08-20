import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { css } from 'emotion'
import { setOrderUser } from 'data/order/actions'
import { getOrderUser, isOrderEmpty } from 'data/order/selectors'
import { getProductIds } from 'data/product/selectors'
import { hideOnMobile, mq } from 'styles/util'
import { ProductField } from './ProductField'
import { OrderTotal } from './OrderTotal'

const mapStateToProps = (state) => ({
  user: getOrderUser(state),
  products: getProductIds(state),
  isEmpty: isOrderEmpty(state),
})

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setOrderUser(user)),
})

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  setDisplayName('OrderForm'),
)

export const OrderForm = enhancer(({ products, isEmpty, onNameChange }) => (
  <form>
    <fieldset>
      <label htmlFor="name">
      Nombre*
      </label>
      <input
        type="text"
        name="name"
        onChange={onNameChange}
      />
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
      <button
        type="submit"
        disabled={isEmpty}
      >
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
