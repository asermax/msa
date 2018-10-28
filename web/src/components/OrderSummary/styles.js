import { css } from '@emotion/core'
import { mq } from 'styles/util'

export const receipt = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export const receiptTitle = css`
  text-align: center;
  padding: 0 0 2rem;
`

export const totalTitle = css`
  padding-left: 10%;
  flex-grow: 1;
`

export const products = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
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

export const total = css`
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`
