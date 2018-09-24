// @flow
import type { State } from 'data/types'
import type { Product } from 'data/product/types'
import * as R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'
import { compose, branch, renderNothing, withProps, setDisplayName, type HOC } from 'recompose'
import { getProduct } from 'data/product/selectors'
import {
  getOrdersWholeProductAmount, getOrdersFractionalProductAmount,
} from 'data/order/selectors'

type Props = {
  id: string,
}
type StateProps = {
  whole: number,
  fraction: number,
  product: Product,
}
type EnhancedProps = {
  name: string,
  whole: number,
  fraction: number,
}

const mapStateToProps = (state: State, { id }: Props): StateProps => ({
  whole: getOrdersWholeProductAmount(state, id),
  fraction: getOrdersFractionalProductAmount(state, id),
  product: getProduct(state, id),
})

const connector: HOC<StateProps, Props> = connect(mapStateToProps)
const enhancer: HOC<EnhancedProps, Props> = compose(
  connector,
  branch(
    R.compose(R.all(R.equals(0)), R.values, R.pick<StateProps>([ 'whole', 'fraction' ])),
    renderNothing,
  ),
  withProps(({ product }: StateProps) => ({
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
