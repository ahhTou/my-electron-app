const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
    entry: path.resolve(__dirname, '../src/renderer/main.ts'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'renderer.js',
    },
    resolve: {
        extensions: ['.js', '.json', '.css', '.ts', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, '../src/renderer'),
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
            template: path.resolve(__dirname, '../public/index.html'),
        }),
        new webpack.DefinePlugin({
            NODE_ENV: `"${process.env.NODE_ENV}"`,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        open: true, // 自动打开浏览器
        port: 9008, // 运行端口
        compress: true,
        hot: true,
        static: {
            directory: '../public',
            watch: true,
        },
    },
    mode: 'development',
    target: 'web',
}
