const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../src');

module.exports = {
    entry: ['@babel/polyfill', APP_DIR],
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader'
            }
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
        template: './src/index.html', 
        filename: './index.html' 
        })
    ]
}