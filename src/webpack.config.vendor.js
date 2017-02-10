const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCss = new ExtractTextPlugin('vendor.css');

module.exports = (env) => {
    const isDev = !(env && env.prod);
    const sharedConfig = {
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
                '@angular/platform-server',
                '@angular/router',
                'angular2-universal',
                'angular2-universal-polyfills',
                'bootstrap',
                'bootstrap/dist/css/bootstrap.css',
                'jquery',
                'ng2-page-scroll'
            ]
        },
        output: {
            path: path.join(__dirname, 'wwwroot', 'dist'),
            filename: '[name].js',
            library: '[name]_[hash]'
        },
        module: {
            rules: [
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
            new webpack.ContextReplacementPlugin(/\@angular\b.*\b(bundles|linker)/, path.join(__dirname, './Client')),
            new webpack.IgnorePlugin(/^vertx$/)
        ]
    };

    const clientConfig = merge(sharedConfig, {
        output: { path: path.join(__dirname, 'wwwroot', 'dist') },
        module: {
            rules: [
                { test: /\.css(\?|$)/, use: extractCss.extract({ loader: 'css-loader' }) }
            ]
        },
        plugins: [
            extractCss,
            new webpack.DllPlugin({
                path: path.join(__dirname, 'wwwroot', 'dist', '[name]-manifest.json'),
                name: '[name]_[hash]'
            })
        ].concat(isDev ? [] : [
            new webpack.optimize.UglifyJsPlugin()
        ])
    });

    const serverConfig = merge(sharedConfig, {
        target: 'node',
        resolve: { mainFields: ['main'] },
        output: {
            path: path.join(__dirname, 'Client', 'dist'),
            libraryTarget: 'commonjs2'
        },
        module: {
            rules: [{ test: /\.css(\?|$)/, use: ['to-string-loader', 'css-loader'] }]
        },
        entry: { vendor: ['aspnet-prerendering'] },
        plugins: [
            new webpack.DllPlugin({
                path: path.join(__dirname, 'Client', 'dist', '[name]-manifest.json'),
                name: '[name]_[hash]'
            })
        ]
    });

    return [clientConfig, serverConfig];
};
