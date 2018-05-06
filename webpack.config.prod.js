/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: ['./src/client/index.js']
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: './[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/, exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract(
        { fallback: 'style-loader', use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader' }
      )
    }]
  },
  plugins: [
    new ExtractTextPlugin({ filename: '[name].style.css', allChunks: true }),
  ]
};
