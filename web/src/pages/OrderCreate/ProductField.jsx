import * as R from 'ramda'
import * as RA from 'ramda-adjunct'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, withHandlers, flattenProp, setPropTypes, setDisplayName } from 'recompose'
import { getProduct } from 'data/product/selectors'
import { setCurrentOrderProductAmount } from 'data/order/actions'
import { getCurrentOrderProductAmount } from 'data/order/selectors'
import { Input } from 'components/Input'
import * as styles from './styles'

const mapStateToProps = (state, { id }) => ({
  product: getProduct(state, id),
  amount: getCurrentOrderProductAmount(state, id),
})

const mapDispatchToProps = (dispatch, { id }) => ({
  setCurrentOrderProductAmount: (amount) => dispatch(setCurrentOrderProductAmount(id, amount)),
})

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onAmountChange: ({ setCurrentOrderProductAmount }) => R.compose(
      setCurrentOrderProductAmount,
      R.when(RA.isNaN, R.always(0)),
      parseFloat,
      R.path([ 'target', 'value' ]),
    ),
  }),
  flattenProp('product'),
  setPropTypes({
    id: PropTypes.number.isRequired,
  }),
  setDisplayName('ProductField'),
)

export const ProductField = enhancer(({
  name, price, unit, minAmount, amount, onAmountChange,
}) => (
  <tr css={styles.fieldRow}>
    <td>
      <label htmlFor={name}>
        {name}
      </label>
    </td>
    <td css={styles.hideOnMobile}>
      x {unit}
    </td>
    <td>
      <Input
        name={name}
        type="number"
        min="0"
        step={minAmount}
        value={amount}
        onChange={onAmountChange}
      />
    </td>
    <td css={styles.hideOnMobile}>
      ${price}
    </td>
    <td css={styles.totalCell}>
      ${price * amount}
    </td>
  </tr>
))
