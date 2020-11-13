const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, "./client/src/index.js"),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "./public")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sethora',
      template: path.resolve(__dirname, './client/src/index.html'),
      filename: 'index.html'
    })
  ]
}