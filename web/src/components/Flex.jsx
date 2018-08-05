import * as R from 'ramda'
import styled from 'react-emotion'

export const Flex = styled.div`
  display: flex;
  flex-direction: ${R.propOr('row', 'direction')};
  align-items: ${R.propOr('start', 'aligment')};
`
