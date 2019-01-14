import styled from '@emotion/styled'
import { colors } from 'styles/util'

export const Input = styled.input`
  height: 3.8rem;
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 0.6rem 1rem;
  border: 0.1rem solid ${colors.borderGray};
  border-radius: 0.4rem;
  box-shadow: none;
  box-sizing: inherit;
  appearance: none;
  background-color: transparent;

  :focus {
    border-color: #9b4dca;
    outline: 0;
  }
`
