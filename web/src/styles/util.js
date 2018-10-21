import * as R from 'ramda'
import { css } from 'emotion'

const breakpoints = {
  mobile: '40rem',
  tablet: '80rem',
  deskotp: '120rem',
}

export const mq = R.map((value) => `@media (min-width: ${value})`)(breakpoints)

export const hideOnMobile = css`
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`

export const colors = {
  transparent: 'transparent',
  borderGray: '#d1d1d1',
  black: '#000000',
  white: '#ffffff',
  primary: '#9b4dca',
  secondary: '#606c76',
}
