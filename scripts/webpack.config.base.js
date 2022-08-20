const path = require('path')
const webpack = require('webpack')
const resolveDir = (dir) => path.resolve(__dirname, dir)

module.exports = {
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
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
        new webpack.DefinePlugin({
            NODE_ENV: `"${process.env.NODE_ENV}"`,
        }),
    ],
}
