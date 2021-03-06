const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    devtool: 'cheap-module-eval-source-map', //inline-source-map',
    devServer: {
        contentBase: './public'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    
});