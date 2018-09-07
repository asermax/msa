/* eslint-env node */
const webpack = require('webpack')
const merge = require('webpack-merge')
const { resolve } = require('path')
const config = require('./webpack.base.config')

module.exports = merge.smart(config, {
  plugins: [ new webpack.HotModuleReplacementPlugin() ],

  mode: 'development',

  devtool: 'eval-source-map',

  devServer: {
    hotOnly: true,
    contentBase: resolve(__dirname, 'src'),
    historyApiFallback: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    port: '80',
    publicPath: '/',
  },
})
