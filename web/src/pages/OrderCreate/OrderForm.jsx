import React from 'react'
import { connect } from 'react-redux'
import { compose, withHandlers, setDisplayName } from 'recompose'
import { css } from 'emotion'
import { setOrderUser, createOrderRequest } from 'data/order/actions'
import { getOrderUser, getOrderOrganization, isOrderValid } from 'data/order/selectors'
import { getProductIds } from 'data/product/selectors'
import { hideOnMobile, mq } from 'styles/util'
import { ProductField } from './ProductField'
import { OrderTotal } from './OrderTotal'

const mapStateToProps = (state) => ({
  user: getOrderUser(state),
  organization: getOrderOrganization(state),
  products: getProductIds(state),
  isValid: isOrderValid(state),
})

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setOrderUser(user)),
  createOrder: () => dispatch(createOrderRequest()),
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
        disabled={!isValid}
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
