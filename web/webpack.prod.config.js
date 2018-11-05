/* eslint-env node */
const { resolve } = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base.config')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge.smart(config, {
  mode: 'production',

  output: {
    filename: '[name].[chunkhash].js',
  },

  plugins: [
    new CopyWebpackPlugin([
      resolve(__dirname, 'assets', 'google111bec0b7e4188b4.html'),
    ]),
  ],
})
