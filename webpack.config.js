const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')
const __DEV__ = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: __DEV__ ? 'development' : 'production',
  entry: {
    app: './src/index.ts',
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // host: '0.0.0.0',
    hot: true,
    publicPath: '/',
    port: 8080,
    stats: {colors: true},
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__,
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['dist/**/*.*'],
      verbose: false,
    }),
    new HtmlWebpackPlugin({
      title: 'App',
      filename: 'index.html',
      template: 'src/index.ejs',
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.json$/,
        use: [
          {
            loader: 'json-loader'
          }
        ]
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      path.join(__dirname, 'src'),
    ],
    extensions: ['.ts', '.js', '.json']
  },
}
