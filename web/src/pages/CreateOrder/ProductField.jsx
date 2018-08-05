import React from 'react'
import { connect } from 'react-redux'
import { compose, flattenProp, setDisplayName } from 'recompose'
import { css } from 'emotion'
import { getProduct } from 'data/product/selectors'
import { hideOnMobile } from 'styles/util'

const mapStateToProps = (state, { id }) => ({
  product: getProduct(state, id),
})

const enhancer = compose(
  connect(mapStateToProps),
  flattenProp('product'),
  setDisplayName('ProductField'),
)

export const ProductField = enhancer(({ name, price, unit, minAmount, amount }) => (
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
        min={minAmount}
        step={minAmount}
        value={amount}
      />
    </td>
    <td className={hideOnMobile}>
      ${price}
    </td>
    <td className={totalCell}>
      $800
    </td>
  </tr>
))

const fieldRow = css`
  label {
    font-weight: normal;
  }
`

const totalCell = css`
  font-weight: bold;
`

