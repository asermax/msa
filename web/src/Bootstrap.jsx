/* globals module */
import React from 'react'
import PropTypes from 'prop-types'
import { hot, setConfig } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { App } from 'pages/App'

setConfig({ pureSFC: true })

const Bootstrap = ({ store }) => (
  <Provider store={store}>
    <App/>
  </Provider>
)

Bootstrap.propTypes = {
  store: PropTypes.object.isRequired,
}

export default hot(module)(Bootstrap)
