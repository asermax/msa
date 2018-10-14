/* eslint-env node */
import 'styles/global'
import fetch from 'node-fetch'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { Provider } from 'react-redux'
import { configureStore } from './store'

// polyfill fetch for wretch
global.fetch = fetch

export const renderEmail = async(sagas, Component, props) => {
  const store = configureStore()

  store.runSaga(sagas, props).done.then(() => {
    // eslint-disable-next-line
    console.log(renderToStaticMarkup(
      <Provider store={store}>
        <Component {...props} />
      </Provider>,
    ))
  }).catch((error) =>
    // eslint-disable-next-line
    console.log(error)
  )
}
