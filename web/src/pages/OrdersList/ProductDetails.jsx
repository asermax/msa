import * as R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'
import { compose, branch, renderNothing, withProps, setDisplayName } from 'recompose'
import { getProduct } from 'data/product/selectors'
import {
  getOrdersWholeProductAmount, getOrdersFractionalProductAmount,
} from 'data/order/selectors'

const mapStateToProps = (state, { id }) => ({
  whole: getOrdersWholeProductAmount(state, id),
  fraction: getOrdersFractionalProductAmount(state, id),
  product: getProduct(state, id),
})

const connector = connect(mapStateToProps)
const enhancer = compose(
  connector,
  branch(
    R.compose(R.all(R.equals(0)), R.values, R.pick([ 'whole', 'fraction' ])),
    renderNothing,
  ),
  withProps(({ product }) => ({
    name: product.name,
  })),
  setDisplayName('ProductDetails'),
)

export const ProductDetails = enhancer(({ name, whole, fraction }) => (
  <tr>
    <td>
      {name}
    </td>
    <td>
      {fraction}
    </td>
    <td>
      {whole}
    </td>
  </tr>
))
