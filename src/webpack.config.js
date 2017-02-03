const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
    const isDev = !(env && env.prod);
    const config = {
        context: __dirname,
        cache: true,
        profile: true,
        performance: isDev ? { hints: false } : { hints: 'warning' },
        devtool: isDev ? 'source-map' : false,
        resolve: {
            modules: ['node_modules', path.resolve(__dirname, 'Client')],
            extensions: ['.js', '.ts']
        },
        entry: {
            main: ['./Client/main.ts']
        },
        output: {
            path: path.join(__dirname, 'wwwroot', 'dist'),
            filename: '[name].js',
            publicPath: '/dist/'
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: [/\.(spec|e2e)\.ts$/],
                    use: ['awesome-typescript-loader', 'angular2-template-loader']
                },
                { test: /\.html$/, use: 'html-loader' },
                {
                    test: /\.css/,
                    use: ['style-loader', 'css-loader', 'postcss-loader']
                },
                {
                    test: /\.(jpeg|jpg|gif|png|json|svg)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 1500,
                                name: '[name].[ext]'
                            }
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                gifsicle: {
                                    interlaced: false
                                },
                                mozjpeg: {
                                    quality: 85
                                },
                                optipng: {
                                    optimizationLevel: 1
                                },
                                pngquant: {
                                    quality: 85,
                                    speed: 1
                                },
                                progressive: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/dist/vendor-manifest.json')
            })
        ].concat(isDev
            ? []
            : [
                new webpack.LoaderOptionsPlugin({
                    minimize: true,
                    debug: false
                }),
                new webpack.optimize.UglifyJsPlugin()
            ])
    }

    return config;
};
