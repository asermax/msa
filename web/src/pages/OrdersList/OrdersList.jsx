import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { forRoute } from 'hocs/forRoute'
import { ORDERS_LIST } from 'data/route/actions'
import { getOrdersIds } from 'data/order/selectors'
import { OrderDetails } from './OrderDetails'

const mapStateToProps = (state) => ({
  orders: getOrdersIds(state),
})

const enhancer = compose(
  forRoute(ORDERS_LIST),
  connect(mapStateToProps),
  setDisplayName('OrdersList'),
)

export const OrdersList = enhancer(({ orders }) => (
  <div>
    <h1>
      Ordenes
    </h1>
    {orders.map((id) => (
      <OrderDetails key={id} id={id} />
    ))}
  </div>
))
