import { css } from '@emotion/core'
import { transparentize } from 'polished'
import { colors, measurements } from 'styles/util'

export const backdrop = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${transparentize(0.3, colors.black)};
`

export const close = css`
  cursor: pointer;
`

export const actionsContainer = css`
  position: relative;
`

export const actionsButton = css`
  cursor: pointer;
`

export const actionsList = css`
  position: absolute;
  top: 2rem;
  right: 0;
  border: ${measurements.borderWidth} solid ${colors.borderGray};
  border-radius: ${measurements.borderRadius};
  list-style: none;
`

export const actionItem = css`
  margin: 0;
  padding: 0.5rem 3rem;
  background-color: ${colors.white};
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.white};
  }

  &:first-child {
    border-top-left-radius: ${measurements.borderRadius};
    border-top-right-radius: ${measurements.borderRadius};
  }

  &:last-child {
    border-bottom-left-radius: ${measurements.borderRadius};
    border-bottom-right-radius: ${measurements.borderRadius};
  }
`
