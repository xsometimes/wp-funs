const webpackBase = require('./webpack.config.base');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = webpackMerge(webpackBase, {
    mode: 'production',
    plugins: [],
    optimization: {
        minimizer: [
            new UglifyJsPlugin()
        ],
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2,
                    filename: '[name].bundle.js'
                }
            }
        }
    }
})