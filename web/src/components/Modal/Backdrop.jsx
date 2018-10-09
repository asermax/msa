import styled from 'react-emotion'
import { transparentize } from 'polished'
import { colors } from 'styles/util'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${transparentize(0.3, colors.black)};
`
