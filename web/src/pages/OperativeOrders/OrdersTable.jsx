import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { getFilteredOrdersIds } from 'data/order/selectors'
import { getSortedProducts } from 'data/product/selectors'
import { OrderDetails } from './OrderDetails'
import { OrdersTotal } from './OrdersTotal'
import * as styles from './styles'

const mapStateToProps = (state) => ({
  orders: getFilteredOrdersIds(state),
  products: getSortedProducts(state),
})

const enhancer = compose(
  connect(mapStateToProps),
  setDisplayName('OrdersTable'),
)

export const OrdersTable = enhancer(({ orders, products }) => (
  <table>
    <thead>
      <tr>
        <th>
          <div>
            Nombre
          </div>
        </th>
        {products.map(({ id, name }) => (
          <th className={styles.tableHeader} key={id}>
            <div>
              {name}
            </div>
          </th>
        ))}
        <th>
          <div>
            Total
          </div>
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
))
