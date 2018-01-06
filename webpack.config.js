const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const __DEV__ = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    app: './src/js/index.js',
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: '0.0.0.0',
    hot: true,
    publicPath: '/',
    port: 8080,
    stats: {colors: true},
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'App',
      filename: 'index.html',
      inject: false,
      xhtml: true,
      hash: false,
      template: 'src/html/index.html',
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]-[local]!postcss-loader'},
      {test: /\.json$/, loaders: ['json-loader']},
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      path.join(__dirname, 'src/js'),
      path.join(__dirname, 'src/css'),
    ],
  },
}
