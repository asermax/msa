import { css } from '@emotion/core'
import { transparentize } from 'polished'
import { colors } from 'styles/util'

export const backdrop = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${transparentize(0.3, colors.black)};
`
