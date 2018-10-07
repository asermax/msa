import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import 'styles/global'
import styled from 'react-emotion'

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

addDecorator((story) => (
  <Wrapper>{story()}</Wrapper>
))

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
