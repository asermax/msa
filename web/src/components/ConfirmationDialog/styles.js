import { css } from '@emotion/core'

export const dialog = css`
  white-space: nowrap;
`

export const buttons = css`
  display: flex;
  flex-direction: row;
  padding-top: 2rem;
  justify-content: space-between;
`

export const button = css`
  &:first-of-type {
    margin-right: 1rem;
  }
`
