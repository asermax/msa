import React from 'react'
import { css } from 'emotion'
import { hideOnMobile } from 'styles/util'

export const ProductField = ({ name, price, unit, minAmount, amount }) => (
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
)

const fieldRow = css`
  label {
    font-weight: normal;
  }
`

const totalCell = css`
  font-weight: bold;
`

