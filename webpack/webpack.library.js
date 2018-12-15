const {paths} = require('./webpack.constants.js');

module.exports = {
  entry: paths.src + '/Pattern.js',
  devtool: 'eval-source-map',
  mode: 'production',
  output: {
    filename: 'pattern.min.js',
    path: paths.root,
    library: 'Pattern',
    libraryTarget: 'umd'
  }
};