/* eslint-env node */
const merge = require('webpack-merge')
const config = require('./webpack.base.config')

module.exports = merge.smart(config, {
  mode: 'production',

  output: {
    filename: '[name].[chunkhash].js',
  },
})
