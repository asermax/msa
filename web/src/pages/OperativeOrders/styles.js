import { css } from '@emotion/core'

export const nameHeader = css`
  vertical-align: bottom;
`

export const productHeader = css`
  white-space: nowrap;

  & > * {
    transform: rotate(345deg);
    width: 30px;
  }
`

export const totalHeader = css`
  vertical-align: bottom;
  text-align: right;
`

export const paidHeader = css`
  width: 0;
  white-space: nowrap;

  & > * {
    width: 0;
    transform: translateY(6px) translateX(10px) rotate(270deg);
  }
`

export const detailsRow = css`
  cursor: pointer;

  &:hover {
    background-color: #f4f5f6;
  }
`

export const nameCell = css`
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const productCell = css`
  white-space: nowrap;
`

export const totalCell = css`
  text-align: right;
  font-weight: bold;
`

export const titleCell = css`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 130%;
`

export const paidCell = css`
  input {
    margin: 0;
  }
`
