const utils = require('./../utils');
const config = require('../../../config');

const webpack = require('webpack');
const merge = require('webpack-merge');


// Get base webpack configuration
let base = require('./base');

// Load webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');


// add hot-reload related code to entry chunks
Object.keys(base.entry).forEach(function (name) {
    base.entry[name] = ['./build/modules/dev/client'].concat(base.entry[name])
});


module.exports = merge(base, {


    // Add css style loaders
    module: {
        rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
    },

    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',

    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),

        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),

        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),

        new FriendlyErrorsPlugin()
    ]

});
