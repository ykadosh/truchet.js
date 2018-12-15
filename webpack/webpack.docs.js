const {paths} = require('./webpack.constants.js');

module.exports = {
  entry: paths.docs + '/index.js',
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    filename: 'index.min.js',
    path: paths.docs,
  },
  devServer: {
    contentBase: paths.docs,
    compress: true,
    port: 9000
  }
};