const webpackBase = require('./webpack.config.base');
const webpackMerge = require('webpack-merge');
const config = require('./config');

module.exports = webpackMerge(webpackBase, {
    mode: 'development',
    devServer: {
        contentBase: config.devServerOutputPath,
        overlay: {
            errors: true,
            warnings: true
        }
    }
})

// devServer配置项的contentBase项是项目的根目录，即dist目录，区别在于这个dist目录存在于内存中的dist目录