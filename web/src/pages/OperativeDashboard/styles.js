import { css } from '@emotion/core'

export const filters = css`
  width: 100%;
  margin-bottom: 1.5rem;
  display: grid;
  grid-template-columns: auto 1fr auto 1fr auto 1fr;
  grid-column-gap: 1rem;
  justify-content: stretch;
  align-items: flex-start;
`

export const filterLabel = css`
  margin-bottom: 0;
  margin-top: 0.5rem;
`

export const searchInput = css`
  margin-bottom: 0;
`
