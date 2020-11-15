const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const path = require('path')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  context: path.resolve(__dirname, 'frontend'),
  entry: {
    frontend: './index.js'
  },
  mode: isDevelopment ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: [
            isDevelopment && require.resolve('react-refresh/babel')
          ].filter(Boolean)
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    contentBase: './build',
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: 'index.html'
    }),
    isDevelopment && new ReactRefreshWebpackPlugin()
  ].filter(Boolean),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build')
  }
}
