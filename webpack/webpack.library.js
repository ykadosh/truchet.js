const TerserPlugin = require('terser-webpack-plugin');
const {paths} = require('./webpack.constants');
const {hasArg} = require('./webpack.utility');

module.exports = {
  entry: {
    'truchet.js': paths.src + '/index.js',
    'truchet.min.js': paths.src + '/index.js',
  },
  devtool: hasArg('production') ? false : 'eval-source-map',
  mode: hasArg('production') ? 'production' : 'development',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ // This plugin is only needed for the prupose of creating 2 versions: minified & non-minified
        test: /\.min\.js$/,
        terserOptions: {
          ecma: 6,
          compress: true,
          output: {
            comments: false,
            beautify: false
          }
        }
      })
    ],
  },
  output: {
    filename: '[name]',
    path: paths.root,
    libraryTarget: 'umd', // See https://github.com/webpack/webpack/issues/3560
  }
};