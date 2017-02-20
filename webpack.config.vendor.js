const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCss = new ExtractTextPlugin('vendor.css');

module.exports = (env) => {
    const isDev = !(env && env.prod);
    const config = {
        context: __dirname,
        resolve: {
            extensions: ['.js']
        },
        entry: {
            vendor: [
                '@angular/common',
                '@angular/compiler',
                '@angular/core',
                '@angular/http',
                '@angular/forms',
                '@angular/platform-browser',
                '@angular/platform-browser-dynamic',
                '@angular/router',
                'bootstrap',
                'bootstrap/dist/css/bootstrap.css',
                'jquery'
            ]
        },
        output: {
            path: path.join(__dirname, 'wwwroot', 'dist'),
            filename: '[name].js',
            library: '[name]_[hash]'
        },
        module: {
            loaders: [
                { test: /\.css/, loader: extractCss.extract(['css-loader']) },
                {
                    test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                    loader: 'url-loader?limit=100000&name=[name].[ext]'
                },
                { test: /\.json$/, loader: 'json-loader' }
            ]
        },
        plugins: [
            extractCss,
            new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }),
            new webpack.DllPlugin({
                path: path.join(__dirname, 'wwwroot', 'dist', '[name]-manifest.json'),
                name: '[name]_[hash]'
            }),
            new webpack.ContextReplacementPlugin(/\@angular\b.*\b(bundles|linker)/, path.join(__dirname, './Client')), // Workaround for https://github.com/angular/angular/issues/11580
            new webpack.IgnorePlugin(/^vertx$/) // Workaround for https://github.com/stefanpenner/es6-promise/issues/100
        ].concat(isDev ? [] : [
            new webpack.optimize.UglifyJsPlugin({
                compress: { warnings: false }
            })])
    };

    return config;
};
