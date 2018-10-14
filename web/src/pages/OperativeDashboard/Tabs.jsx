import * as R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'
import { compose, withProps, setDisplayName } from 'recompose'
import {
  OPERATIVE_ORDERS, OPERATIVE_PRODUCTS,
  goToOperativeOrders, goToOperativeProducts,
} from 'data/route/actions'
import { getCurrentRoute } from 'data/route/selectors'
import Link from 'redux-first-router-link'
import { TabContainer, Tab } from 'components/Tabs'

const mapStateToProps = (state) => ({
  route: getCurrentRoute(state),
})

const enhancer = compose(
  connect(mapStateToProps),
  withProps(({ route }) => ({
    ordersActive: R.ifElse(R.equals(OPERATIVE_ORDERS), R.always(1), R.always(0))(route),
    productsActive: R.ifElse(R.equals(OPERATIVE_PRODUCTS), R.always(1), R.always(0))(route),
  })),
  setDisplayName('Tabs'),
)

const LinkTab = Tab.withComponent(Link)

export const Tabs = enhancer(({ ordersActive, productsActive }) => (
  <TabContainer>
    <LinkTab
      active={ordersActive}
      to={goToOperativeOrders()}
    >
      Órdenes
    </LinkTab>
    <LinkTab
      active={productsActive}
      to={goToOperativeProducts()}
    >
      Productos
    </LinkTab>
  </TabContainer>
))
