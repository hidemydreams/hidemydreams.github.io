const path = require('path');

const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // entry: './src/index.js',
  // output: {
  //   filename: 'bundle.js',
  //   path: path.resolve(__dirname, 'public'),
  // },
  plugins: [new MiniCssExtractPlugin()],
  mode: mode, // setting mode to development which allows us to see comments in bundle
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without addition settings it will reference .babelrc
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devtool: 'source-map', // lets us see in console in which files we have errors instead of seeing it from bundle
  devServer: {
    contentBase: './dist', // setting up a server
  },
};
