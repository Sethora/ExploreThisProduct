const resolve = require('path').resolve;
const SRC_DIR = resolve(__dirname, './client/src/index.jsx');
const DIST_DIR = resolve(__dirname, './client/dist');
// const styleSheet = path.join(__dirname, '/client/dist/stylesheet.css');


module.exports = {
  entry: SRC_DIR,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader', options: {modules: true}}
        ]
      }
    ]
  }
};