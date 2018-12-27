const {paths} = require('./webpack.constants');
const {hasArg} = require('./webpack.utility');

module.exports = {
  entry: paths.src + '/Truchet.js',
  devtool: hasArg('production') ? false : 'eval-source-map',
  mode: hasArg('production') ? 'production' : 'development',
  optimization: {
    minimize: hasArg('production') ? true : false,
  },
  output: {
    filename: 'truchet.min.js',
    path: paths.root,
    library: 'truchet',
    libraryTarget: 'umd'
  }
};