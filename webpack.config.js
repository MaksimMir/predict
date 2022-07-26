const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'index.js',
      assetModuleFilename: 'images/[name][ext]',
    },
    devServer: {
        port: 3003,
        client: {
            overlay: true
        },
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.module\.(sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            modules: {
                                localIdentName: "[local]--[hash:base64:5]",
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /^((?!\.module).)*scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|svg)$/,
                type: 'asset/resource'               
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            {
                test: /\.mp3$/,
                type: 'asset/resource',
                generator: {
                    filename: 'sound/[name][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "index.html",
            inject: false,
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    }
}

module.exports = (env, options) => {
    const isProd = options.mode === 'products';
    config.devtool = isProd ? false : 'eval-cheap-module-source-map';
    config.target = isProd ? 'browsersList' : 'web';
    return config;
}