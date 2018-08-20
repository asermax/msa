import * as R from 'ramda'
import * as RA from 'ramda-adjunct'
import React from 'react'
import { connect } from 'react-redux'
import { compose, withHandlers, flattenProp, setDisplayName } from 'recompose'
import { css } from 'emotion'
import { getProduct } from 'data/product/selectors'
import { setOrderProductAmount } from 'data/order/actions'
import { getOrderProductAmount } from 'data/order/selectors'
import { hideOnMobile } from 'styles/util'

const mapStateToProps = (state, { id }) => ({
  product: getProduct(state, id),
  amount: getOrderProductAmount(state, id),
})

const mapDispatchToProps = (dispatch, { id }) => ({
  setOrderProductAmount: (amount) => dispatch(setOrderProductAmount(id, amount)),
})

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onAmountChange: ({ setOrderProductAmount }) => R.compose(
      setOrderProductAmount,
      R.when(RA.isNaN, R.always(0)),
      parseFloat,
      R.path([ 'target', 'value' ]),
    ),
  }),
  flattenProp('product'),
  setDisplayName('ProductField'),
)

export const ProductField = enhancer(({
  name, price, unit, minAmount, amount, onAmountChange,
}) => (
  <tr className={fieldRow}>
    <td>
      <label htmlFor={name}>
        {name}
      </label>
    </td>
    <td className={hideOnMobile}>
      x {unit}
    </td>
    <td>
      <input
        name={name}
        type="number"
        min="0"
        step={minAmount}
        value={amount}
        onChange={onAmountChange}
      />
    </td>
    <td className={hideOnMobile}>
      ${price}
    </td>
    <td className={totalCell}>
      ${price * amount}
    </td>
  </tr>
))

const fieldRow = css`
  label {
    font-weight: normal;
  }

  input {
    margin: 0;
  }
`

const totalCell = css`
  text-align: right;
  font-weight: bold;
`
