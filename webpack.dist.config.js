/*
 * Webpack distribution configuration
 *
 * This file is set up for serving the distribution version. It will be compiled to dist/ by default
 */

'use strict';

var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');

module.exports = {
  output: {
    publicPath: 'assets/',
    path: 'dist/assets/',
    filename: 'main.js'
  },

  debug: false,
  devtool: false,
  entry: './src/components/main.js',

  stats: {
    colors: true,
    reasons: false
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'lib': __dirname + '/lib'
    },
    root: __dirname + '/src'
  },

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: [/node_modules/, /lib/],
      loader: 'eslint'
    }],

    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader!postcss-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    }, {
      test: /\.(png|gif|jpg)$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.woff$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.woff2$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff2'
    }, {
      test: /\.ttf$/,
      loader: 'file-loader'
    }, {
      test: /\.otf$/,
      loader: 'file-loader'
    }, {
      test: /\.eot$/,
      loader: 'file-loader'
    }, {
      test: /\.svg$/,
      loader: 'file-loader'
    }, {
      test: /\.mp4$/,
      loader: 'file-loader'
    }, {
      test: /\.ogv$/,
      loader: 'file-loader'
    }, {
      test: /\.webm$/,
      loader: 'file-loader'
    }]
  },

  postcss: [autoprefixer]
};
