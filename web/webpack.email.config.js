/* eslint-env node */
const { resolve } = require('path')
const webpack = require('webpack')

const config = {
  target: 'node',

  entry: {
    emails: [
      'emails',
    ],
  },

  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.mjs$/,
        type: 'javascript/auto',
      },
    ],
  },

  resolve: {
    modules: [
      'src',
      'node_modules',
    ],
    extensions: [ '.js', '.jsx' ],
  },

  plugins: [
    new webpack.EnvironmentPlugin([ 'BASE_URL' ]),
  ],

  mode: 'production',
}

module.exports = config
