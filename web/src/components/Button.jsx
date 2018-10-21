import * as R from 'ramda'
import { css } from 'emotion'
import styled from 'react-emotion'
import { colors } from 'styles/util'

const buttonOutlined = css`
  background-color: transparent;
  color: ${colors.primary};

  &:focus,
  &:hover {
    background-color: transparent;
    border-color: ${colors.secondary};
    color: ${colors.secondary};
  }

  &[disabled]:focus,
  &[disabled]:hover {
    border-color: inherit;
    color: ${colors.primary};
  }
`
export const Button = styled('button')`
  background-color: ${colors.primary};
  border: 0.1rem solid ${colors.primary};
  border-radius: 0.4rem;
  color: ${colors.white};
  cursor: pointer;
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 700;
  height: 3.8rem;
  letter-spacing: 0.1rem;
  line-height: 3.8rem;
  padding: 0 3rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  &:focus,
  &:hover {
    background-color: ${colors.secondary};
    border-color: ${colors.secondary};
    color: ${colors.white};
    outline: 0;
  }

  &[disabled] {
    cursor: default;
    opacity: 0.5;
  }

  &[disabled]:focus,
  &[disabled]:hover {
    background-color: ${colors.primary};
    border-color: ${colors.primary};
  }

  ${R.ifElse(R.prop('outlined'), R.always(buttonOutlined), R.always(''))}
`
