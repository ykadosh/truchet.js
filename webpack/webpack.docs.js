const {paths} = require('./webpack.constants.js');

module.exports = {
  entry: paths.docs + '/index.js',
  devtool: 'eval-source-map',
  mode: 'development',
  output: {
    filename: 'index.min.js',
    path: paths.docs,
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