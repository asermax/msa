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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  ${mq.mobile} {
    width: 50%;
  }
`

export const receiptTitle = css`
  text-align: center;
  padding: 0 0 2rem;
`

export const total = css`
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`

export const totalTitle = css`
  padding-left: 10%;
  flex-grow: 1;
`

export const productEntry = css`
  display: flex;
  flex-direction: row;
  height: 3rem;
`
export const productAmount = css`
  flex-basis: 2.5rem;
  flex-shrink: 0;
  margin-right: 0.5rem;

  ${mq.mobile} {
    flex-basis: 10%;
  }
`
export const productName = css`
  flex-grow: 1;
  margin-right: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const productTotal = css`
  flex-basis: 20%;
  flex-shrink: 0;
  text-align: right;
`
