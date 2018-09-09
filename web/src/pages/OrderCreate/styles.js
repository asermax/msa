import { css } from 'emotion'
import { mq } from 'styles/util'
export { hideOnMobile } from 'styles/util'

export const buttonContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mq.mobile} {
    align-items: end;
  }
`

export const titleCell = css`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 130%;
`

export const totalCell = css`
  text-align: right;
  font-weight: bold;
`

export const fieldRow = css`
  label {
    font-weight: normal;
  }

  input {
    margin: 0;
  }
`
