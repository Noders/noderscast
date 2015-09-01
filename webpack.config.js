'use strict';
var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin')

// PATHS
var PATHS = {
    app: __dirname + '',
};
module.exports = {
    // config goes here
    context: PATHS.app,
    entry: {
        //app: ['webpack/hot/dev-server', './index.js']
        app: ['./index.jsx']
    },
    devtool: 'cheap-module-eval-source-map',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        alias: {}
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.styl$/,
            loader: 'style-loader!css-loader!stylus-loader'
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }, {
            test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
            exclude: /(node_modules|bower_components)/,
            loader: 'babel' // The module to load. "babel" is short for "babel-loader"
        }]
    }
    /*,
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        })
    ]
    */
};
