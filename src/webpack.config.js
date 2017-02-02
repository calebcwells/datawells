const path = require('path');
const webpack = require('webpack');
const postCssImport = require('postcss-import');
const postCssNext = require('postcss-cssnext');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

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
                    use: [
                        { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () =>[
                                    postCssImport({ addDependencyTo: webpack }),
                                    postCssNext({
                                        browsers: ['last 2 versions', 'ie >= 9']
                                    })
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /\.(jpeg|jpg|gif|png|json|svg)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 2000,
                                name: '[name].[ext]'
                            }
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                progressive: true,
                                gifsicle: {
                                    interlaced: false
                                },
                                optipng: {
                                    optimizationLevel: 1
                                },
                                pngquant: {
                                    quality: '80-90',
                                    speed: 3
                                }
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new ForkCheckerPlugin(),
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
