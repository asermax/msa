import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { hideOnMobile } from 'styles/util'
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
        <th className={styles.nameHeader}>
          Nombre
        </th>
        {products.map(({ id, name }) => (
          <th className={`${styles.productHeader} ${hideOnMobile}`} key={id}>
            <div>
              {name}
            </div>
          </th>
        ))}
        <th className={styles.totalHeader}>
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
))
