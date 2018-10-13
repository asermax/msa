import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { transparentize } from 'polished'
import { colors } from 'styles/util'

export const Tab = styled.div`
  padding: 0 2rem;
  margin-right: 1rem;
  height: 3rem;
  border-width: ${({ active }) => active ? 0.1 : 0}rem;
  border-style: solid;
  border-color: ${colors.primary};
  border-bottom-width: ${({ active }) => active ? 0 : 0.1}rem;
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
    color: ${({ active }) => active ? colors.primary : colors.white};
  }
`

Tab.propTypes = {
  active: PropTypes.bool,
}
