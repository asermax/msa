import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { css } from 'emotion'
import { compose, flattenProp, setPropTypes, setDisplayName } from 'recompose'
import { getProduct } from 'data/product/selectors'
import { getCurrentOrderProductAmount } from 'data/order/selectors'

const mapStateToProps = (state, { id }) => ({
  product: getProduct(state, id),
  amount: getCurrentOrderProductAmount(state, id),
})

const enhancer = compose(
  connect(mapStateToProps),
  setPropTypes({
    id: PropTypes.string.isRequired,
  }),
  flattenProp('product'),
  setDisplayName('ProductEntry'),
)

export const ProductEntry = enhancer(({ name, unit, price, amount }) => (
  <div className={productEntry}>
    <div className={productAmount}>
      {amount}
    </div>
    <div className={productName}>
      <b>{name}</b> <i>x {unit}</i>
    </div>
    <div className={productTotal}>
      ${amount * price}
    </div>
  </div>
))

const productEntry = css`
  display: flex;
  flex-direction: row;
  height: 3rem;
`
const productAmount = css`
  flex-basis: 10%;
`
const productName = css`
  flex-grow: 1;
`
const productTotal = css`
  flex-basis: 20%;
  text-align: right;
`
