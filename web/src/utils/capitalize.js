import * as R from 'ramda'

/** @type {(v: string) => string} */
export const capitalize = R.compose(
  R.join(''),
  R.juxt([ R.compose(R.toUpper, R.head), R.tail ]),
)
