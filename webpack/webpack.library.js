const {paths} = require('./webpack.constants');
const {hasArg} = require('./webpack.utility');

module.exports = {
  entry: paths.src + '/Pattern.js',
  devtool: hasArg('production') ? false : 'eval-source-map',
  mode: hasArg('production') ? 'production' : 'development',
  output: {
    filename: 'pattern.min.js',
    path: paths.root,
    library: 'Pattern',
    libraryTarget: 'umd'
  }
};