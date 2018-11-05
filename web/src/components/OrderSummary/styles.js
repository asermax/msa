import { css } from '@emotion/core'
import { mq } from 'styles/util'

export const receipt = css`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    'title'
    'products'
    'separator'
    'total';
`

export const receiptTitle = css`
  grid-area: title;
  text-align: center;
`

export const products = css`
  grid-area: products;
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

export const separator = css`
  grid-area: separator;
`

export const total = css`
  grid-area: total;
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
