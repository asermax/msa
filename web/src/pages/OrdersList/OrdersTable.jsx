import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { getOrdersIds } from 'data/order/selectors'
import { OrderDetails } from './OrderDetails'
import { OrdersTotal } from './OrdersTotal'
import * as styles from './styles'

const mapStateToProps = (state) => ({
  orders: getOrdersIds(state),
})

const enhancer = compose(
  connect(mapStateToProps),
  setDisplayName('OrdersTable'),
)

export const OrdersTable = enhancer(({ orders }) => (
  <div>
    <h1>
      Ordenes
    </h1>
    <table>
      <thead>
        <tr>
          <th>
            Nombre
          </th>
          <th className={styles.totalCell}>
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((id) => (
          <OrderDetails key={id} id={id} />
        ))}
        <OrdersTotal />
      </tbody>
    </table>
  </div>
))
