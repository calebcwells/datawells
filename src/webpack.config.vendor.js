var IsDev = process.argv.indexOf('--env.prod') < 0;
var Path = require('path');
var Webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ExtractCss = new ExtractTextPlugin('vendor.css');

module.exports = {
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            { test: /\.css/, loader: ExtractCss.extract(['css']) },
            { test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/, loader: 'url?limit=100000&name=[name].[ext]' },
            { test: /\.json$/, loader: 'json-loader' }
        ]
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
            'animate.css/animate.css',
            'bootstrap',
            'bootstrap/dist/css/bootstrap.css',
            'font-awesome/css/font-awesome.css',
            'jquery',
            'ng2-page-scroll'
        ]
    },
    output: {
        path: Path.join(__dirname, 'wwwroot', 'dist'),
        filename: '[name].js',
        library: '[name]_[hash]'
    },
    plugins: [
        ExtractCss,
        new Webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }),
        new Webpack.optimize.OccurrenceOrderPlugin(),
        new Webpack.DllPlugin({
            path: Path.join(__dirname, 'wwwroot', 'dist', '[name]-manifest.json'),
            name: '[name]_[hash]'
        }),
        new Webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/, __dirname)
    ].concat(IsDev ? [] : [
        new Webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ])
};
