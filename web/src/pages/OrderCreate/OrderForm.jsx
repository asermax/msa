import React from 'react'
import { connect } from 'react-redux'
import { compose, withHandlers, setDisplayName } from 'recompose'
import { setCurrentOrderUser, createOrder } from 'data/order/actions'
import {
  getCurrentOrderUser, getCurrentOrderOrganization, isOrderValid,
} from 'data/order/selectors'
import { getProductIds } from 'data/product/selectors'
import { ProductField } from './ProductField'
import { OrderTotal } from './OrderTotal'
import * as styles from './styles'

const mapStateToProps = (state) => ({
  user: getCurrentOrderUser(state),
  organization: getCurrentOrderOrganization(state),
  products: getProductIds(state),
  isValid: isOrderValid(state),
})

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setCurrentOrderUser(user)),
  createOrder: () => dispatch(createOrder()),
})

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onSubmit: ({ createOrder }) => (e) => {
      e.preventDefault()
      createOrder()
    },
    onNameChange: ({ setUser }) => (e) => setUser(e.target.value),
  }),
  setDisplayName('OrderForm'),
)

export const OrderForm = enhancer(({
  user, organization, products, isValid, onNameChange, onSubmit,
}) => (
  <form onSubmit={onSubmit}>
    <fieldset>
      <label htmlFor="name">
      Organization*
      </label>
      <input
        type="text"
        name="name"
        value={organization}
        disabled
      />
      <label htmlFor="name">
      Nombre*
      </label>
      <input
        type="text"
        name="name"
        value={user}
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
            <th className={styles.hideOnMobile}>
            </th>
            <th>
              Cantidad
            </th>
            <th className={styles.hideOnMobile}>
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
    <div className={styles.buttonContainer}>
      <button
        type="submit"
        disabled={!isValid}
      >
        Enviar Orden
      </button>
    </div>
  </form>
))
