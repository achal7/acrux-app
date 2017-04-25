// const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '../Application/index.html'),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  context: path.join(__dirname, '../Application'),
  entry: {
    javascript: './App.js'
  },
  output: {
    filename: 'App.js',
    path: path.join(__dirname, '../www')
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     loader: 'eslint-loader'
    //   },
    // ],
    loaders: [
             { test: /\.js$/, loader: 'babel-loader' }
    ],
  },
  // eslint: {
  //   configFile: './.eslintrc'
  // },
  plugins: [HTMLWebpackPluginConfig]
};
