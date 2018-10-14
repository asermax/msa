import { css } from 'emotion'

export const nameHeader = css`
  vertical-align: bottom;
`

export const productHeader = css`
  height: 200px;
  white-space: nowrap;

  & > * {
    transform: translateY(76px) rotate(315deg);
    width: 30px;
  }
`

export const totalHeader = css`
  vertical-align: bottom;
  text-align: right;
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
