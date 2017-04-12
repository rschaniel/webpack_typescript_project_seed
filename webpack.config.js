var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    devtool: '#source-map',

    entry: [
        './app/src/main.ts',
        './app/assets/scss/main.scss'
    ],

    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'dist/js/bundle.js'
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin("dist/css/main.css")

    ],

    resolve: {
        extensions: ['.ts', '.js', '.scss']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /\.spec.ts$/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            }
        ]
    }
};
