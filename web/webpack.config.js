/* eslint-env node */
const webpack = require('webpack')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    app: [
      'index',
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
    ],
  },

  resolve: {
    modules: [
      'src',
      'node_modules',
    ],
    extensions: [ '.js', '.jsx'],
  },

  optimization: {
    namedChunks: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src', 'index.html'),
      includeGTM: false,
    }),
  ],

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
}

module.exports = config
