const {paths} = require('./webpack.constants');
const {hasArg} = require('./webpack.utility');

module.exports = {
  entry: paths.docs + '/index.js',
  devtool: hasArg('production') ? false : 'eval-source-map',
  mode: hasArg('production') ? 'production' : 'development',
  output: {
    filename: 'index.min.js',
    path: paths.docs,
  },
  optimization: {
    minimize: hasArg('production') ? true : false,
  },
  devServer: {
    contentBase: paths.docs,
    compress: true,
    port: 9000
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
          "style-loader", 
          "css-loader",
          "sass-loader"
        ]
    }]
  }
};