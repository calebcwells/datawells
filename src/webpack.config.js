const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

module.exports = (env) => {
    const isDev = !(env && env.prod);
    const sharedConfig = {
        context: __dirname,
        cache: true,
        profile: true,
        performance: isDev ? { hints: false } : { hints: 'warning' },
        devtool: isDev ? 'source-map' : false,
        resolve: {
            extensions: ['.js', '.ts']
        },
        output: {
            filename: '[name].js',
            publicPath: '/dist/'
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: [/\.(spec|e2e)\.ts$/],
                    use: ['awesome-typescript-loader?silent=true', 'angular2-template-loader']
                },
                { test: /\.html$/, use: 'html-loader?minimize=false' },
                {
                    test: /\.css/,
                    use: ['style-loader',
                          'css-loader',
                          {
                              loader: 'postcss-loader',
                              options: {
                                  plugins: () =>[
                                      autoprefixer()
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
                                    quality: 85,
                                    progressive: true
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
        plugins: [new CheckerPlugin()]
    }

    const clientConfig = merge(sharedConfig, {
        entry: { 'main-client': './Client/boot-client.ts' },
        output: { path: path.join(__dirname, 'wwwroot', 'dist') },
        plugins: [
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/dist/vendor-manifest.json')
            })
        ].concat(isDev ? [] : [
            new webpack.optimize.UglifyJsPlugin()
        ])
    });

    const serverConfig = merge(sharedConfig, {
        resolve: { mainFields: ['main'] },
        entry: { 'main-server': './Client/boot-server.ts' },
        plugins: [
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./Client/dist/vendor-manifest.json'),
                sourceType: 'commonjs2',
                name: './vendor'
            })
        ],
        output: {
            libraryTarget: 'commonjs',
            path: path.join(__dirname, './Client/dist')
        },
        target: 'node',
        devtool: 'inline-source-map',
        node: {
            global: true,
            crypto: 'empty',
            process: true,
            module: false,
            clearImmediate: false,
            setImmediate: false
        }
    });

    return [clientConfig, serverConfig];
};
