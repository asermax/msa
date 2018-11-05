import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { colors } from 'styles/util'

export const Tab = styled.div`
  padding: 0 2rem;
  margin-right: 1rem;
  height: 3rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ active }) => active ? colors.primary : 'transparent'};
  border-bottom-width: 0;
  border-radius: 0.4rem 0.4rem 0 0;
  background-color: ${({ active }) => active ? colors.white : transparentize(0.5, colors.primary)};
  color: ${({ active }) => active ? colors.primary : colors.white};
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  line-height: 3rem;
  text-transform: uppercase;
  cursor: pointer;

  &:hover, &:focus {
    // if used as a link, avoid breaking on hover
    color: ${colors.primary};
    border-color: ${colors.primary};
    background-color: ${colors.white};
  }
`

Tab.propTypes = {
  active: PropTypes.bool,
}
