import React from 'react'
import { setConfig } from 'react-hot-loader'
import { configure, addDecorator } from '@storybook/react'
import styled from 'react-emotion'
import { Global } from '@emotion/core'
import { globalStyles } from 'styles/global'

setConfig({ pureSFC: true })

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

addDecorator((story) => (
  <>
    <Global styles={globalStyles} />
    <Wrapper>{story()}</Wrapper>
  </>
))

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
