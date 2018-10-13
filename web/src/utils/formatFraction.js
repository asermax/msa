import * as R from 'ramda'
import { Fraction } from 'fractional'

export const formatFraction = R.ifElse(
  R.equals('0'),
  R.always('-'),
  R.compose(
    R.invoker(0, 'toString'),
    R.constructN(1, Fraction),
  ),
)
