import { css } from 'emotion'

export const tableHeader = css`
  height: 200px;
  white-space: nowrap;
  text-overflow: ellipsis;

  & > * {
    transform: translate(25px, 51px) rotate(315deg);
    width: 30px;
  }
`

export const detailsRow = css`
  cursor: pointer;

  &:hover {
    background-color: #f4f5f6;
  }
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
