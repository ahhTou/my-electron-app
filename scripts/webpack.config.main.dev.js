const path = require('path')
const resolveDir = (dir) => path.resolve(__dirname, dir)
const baseConfig = require('./webpack.config.base')
const { merge } = require('webpack-merge')

const config = {
    target: 'electron-preload',
    mode: 'development',
    entry: resolveDir('../src/main/preload.ts'),
    output: {
        path: resolveDir('../dist'),
        filename: 'preload.js',
    },
}

module.exports = merge(baseConfig, config)
