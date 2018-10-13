import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { colors } from 'styles/util'

export const Tab = styled.div`
  padding: 0 2rem;
  margin-right: 1rem;
  height: 3rem;
  border: 0.1rem solid ${colors.primary};
  border-bottom: 0;
  border-radius: 0.4rem 0.4rem 0 0;
  background-color: ${({ active }) => active ? colors.primary : colors.transparent};
  color: ${({ active }) => active ? colors.white : colors.primary};
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  line-height: 3rem;
  text-transform: uppercase;
  cursor: pointer;

  &:hover, &:focus {
    // if used as a link, avoid breaking on hover
    color: ${({ active }) => active ? colors.white : colors.primary};
  }
`

Tab.propTypes = {
  active: PropTypes.bool,
}
