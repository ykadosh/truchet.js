const {paths} = require('./webpack.constants');
const {hasArg} = require('./webpack.utility');
// const GenerateHTML = require('./plugins/GenerateHTML');

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
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", 
          "css-loader",
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: [
                paths.docs + '/src/style/colors.scss',
                paths.docs + '/src/style/mixins.scss',
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new GenerateHTML(),
  ]
};