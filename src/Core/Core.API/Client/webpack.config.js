const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.join(__dirname, 'Application');
const buildPath = path.join(__dirname, '../wwwroot');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(sourcePath, 'index.html'),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  context: sourcePath,
  entry: {
    javascript: './App.js'
  },
  output: {
    filename: 'App.js',
    path: buildPath
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
             { test: /\.js$/, loader: 'babel-loader' },
             { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ],
  },
  // eslint: {
  //   configFile: './.eslintrc'
  // },
  plugins: [HTMLWebpackPluginConfig]
};

// function config() {
//   // eslint-disable-next-line no-process-env
//   switch (process.env.NODE_ENV) {
//     case 'production':
//       return 'production';
//     case 'test':
//       return 'test';
//     default:
//       return 'development';
//   }
// }

// module.exports = require(`./Webpack/${config()}.js`);

