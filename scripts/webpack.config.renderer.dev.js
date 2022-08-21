const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolveDir = (dir) => path.resolve(__dirname, dir)

module.exports = {
    entry: {
        index: resolveDir('../src/renderer/main.ts'),
        login: resolveDir('../src/renderer/entries/login.ts'),
        webLogin: resolveDir('../src/renderer/entries/web-login.tsx'),
    },
    output: {
        path: resolveDir('../dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.js', '.json', '.css', '.ts', '.tsx'],
        alias: {
            '@renderer': resolveDir('../src/renderer'),
            '@main': resolveDir('../src/main'),
            '@common': resolveDir('../src/common'),
            '@constant': resolveDir('../src/constant'),
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: resolveDir('../public/index.html'),
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            chunks: ['login'],
            template: resolveDir('../public/index.html'),
        }),
        new HtmlWebpackPlugin({
            filename: 'web-login.html',
            chunks: ['webLogin'],
            template: resolveDir('../public/index.html'),
        }),
        new webpack.DefinePlugin({
            NODE_ENV: `"${process.env.NODE_ENV}"`,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        port: 9008, // 运行端口
        compress: true,
        hot: true,
        static: {
            directory: '../public',
            watch: true,
        },
    },
    mode: 'development',
    target: ['web', 'electron-renderer'],
}
