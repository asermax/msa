import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { forRoute } from 'hocs/forRoute'
import { ORDER_SUMMARY } from 'data/route/actions'
import { getCurrentOrderProductsIds } from 'data/order/selectors'
import { Container } from 'components/Container'
import { Centered } from 'components/Centered'
import { Summary, Title, Products } from 'components/OrderSummary'
import { ProductEntry } from './ProductEntry'
import { OrderTotal } from './OrderTotal'
import * as styles from './styles'

const mapStateToProps = (state) => ({
  products: getCurrentOrderProductsIds(state),
})

const enhancer = compose(
  connect(mapStateToProps),
  forRoute(ORDER_SUMMARY),
  setDisplayName('OrderSummary'),
)

export const OrderSummary = enhancer(({ products }) => (
  <Container>
    <Centered>
      <Summary css={styles.receipt}>
        <Title>
          Este fué tu pedido
        </Title>
        <Products>
          {products.map((id) => (
            <ProductEntry id={id} key={id} />
          ))}
        </Products>
        <OrderTotal />
      </Summary>
    </Centered>
  </Container>
))
