const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// 自动生成html的配置
const config  = require('./config');
let htmlPlugins = [];
let entries = {};
config.htmlDirs.forEach(page => {
    const htmlPlugin = new HtmlWebpackPlugin({
        filename: `${page}.html`,
        template: path.resolve(__dirname, `../src/template/${page}.html`),
        chunks: [page, 'commons']
    });
    htmlPlugins.push(htmlPlugin);
    entries[page] = path.resolve(__dirname, `../src/js/${page}.js`);
});


module.exports = {
    entry: entries,
    devtool: 'cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, config.devServerOutputPath),
        filename: 'static/js/[name].bundle.[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                // 不处理 node_modules 文件中的 css 文件
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    // 设置 css 的 publicPath
                    publicPath: config.cssPublicPath,
                    use: ['css-loader', 'sass-loader']
                    // ,exclude: /node_modules/
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: `url-loader?limit=8192&name=${config.imgOutputPath}[hash].[ext]`
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:['file-loader']
            }

        ]
    },
    plugins: [
        // 自动清理 dist 文件夹
        new CleanWebpackPlugin(['dist']),
        // 将 css 抽取到某个文件夹
        new ExtractTextPlugin(config.cssOutputPath),        
        // 自动生成 HTML 插件
        ...htmlPlugins
    ]
    
}