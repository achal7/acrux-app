var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'Application/index.html'),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
    context: path.join(__dirname, "Application"),
    resolve: {
        extensions: [".js", ".jsx"],
    },
    entry:{
        Application: "./Application.js",
        OrderModule: "./OrderModule/OrderModule.js",
        vendor: ['react', 'react-dom', 'react-router', 'react-router-dom']
    },
    output:{
        path : path.join(__dirname, "wwwroot"),
        filename: "[name].js"
    },
    module: {
        loaders: [
                { test: /\.js$/, loader: 'babel-loader' },
                { test: /\.jsx$/, loader: 'babel-loader' }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        HTMLWebpackPluginConfig
    ]
};
