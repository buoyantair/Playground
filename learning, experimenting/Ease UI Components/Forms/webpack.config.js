



var webpack = require('webpack');

module.exports = {
  entry: "./app/index.js",
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.(sass|scss)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    }]
  },
  devServer: {
    contentBase: __dirname + '/build',
    port: 3000
  }
}
