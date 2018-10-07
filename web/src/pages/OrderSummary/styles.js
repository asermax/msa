import { css } from 'emotion'
import { mq } from 'styles/util'

export const receiptContainer = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const receipt = css`
  ${mq.mobile} {
    width: 50%;
  }
`
