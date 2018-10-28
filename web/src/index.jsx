import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { configureStore } from './data/store'
import Bootstrap from './Bootstrap'

const store = configureStore()

render(
  <Bootstrap store={store} />,
  document.getElementById('root'),
)
