const path = require('path');
const webpack = require('webpack');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

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
            main: ['./Client/boot-client.ts']
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
                    use: ['awesome-typescript-loader', 'angular2-template-loader']
                },
                { test: /\.html$/, use: 'html-loader' },
                {
                    test: /\.css/,
                    use: ['to-string-loader', 'css-loader']
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
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/dist/vendor-manifest.json')
            }),
			new CheckerPlugin()
        ].concat(isDev
            ? []
            : [
                new webpack.optimize.UglifyJsPlugin()
            ])
    }

    return config;
};
