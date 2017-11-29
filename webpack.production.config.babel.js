import webpack from 'webpack';
import path from 'path'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
var CompressionPlugin = require("compression-webpack-plugin");
import BundleAnalyzerPlugin from 'webpack-bundle-analyzer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const pxtorem = require('postcss-pxtorem');

var fs = require('fs');
export default {
    entry: {
        main:path.resolve(__dirname, './src/reactApp.jsx'),
        vendor:['whatwg-fetch'],
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'public/client.bundle.js',
        chunkFilename: 'public/[name].[chunkhash:5].js',
        sourceMapFilename: '[file].map',
        publicPath:'/',
    },
    devtool: "hidden-source-map",
    externals:{
        jquery: 'jQuery',
        fastclick: 'FastClick',
        lodash: '_',
        moment:'moment'
    },
    module: {
        rules:[
            {
                test: /\.(jsx|js)?$/,
                include: [
                    path.resolve(__dirname,'src'),
                ],
                loader: "babel-loader",
                options: {
                    "presets": [
                        "es2015",
                        "stage-0",
                        "react"
                    ],
                    "plugins": [
                        [
                            "import",
                            {
                                "libraryName": "antd",
                                "style":true
                            }
                        ],
                      [
                        "transform-runtime",
                        {

                          "regenerator": true,
                          "moduleName": "babel-runtime"
                        }
                      ],
                        "transform-react-jsx",
                        "add-module-exports",
                        "transform-decorators-legacy"
                    ]
                },
            },{
                test: /\.(scss|gscss)?$/,
                use: [
                    "style-loader", // creates style nodes from JS strings,
                    "css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]", // translates CSS into CommonJS
                    'postcss-loader',
                    "sass-loader", // compiles Sass to CSS
                ],
                exclude:/node_modules[\\/](?!(fengui)[\\/]).*/,
            },
            {
                test: /\.css?$/,
                use: [
                    "style-loader", // creates style nodes from JS strings,
                    'postcss-loader',
                ]
            },
            {
                test: /\.less?$/,
                use: [
                    "style-loader", // creates style nodes from JS strings,
                    'postcss-loader',
                    "less-loader", // compiles Sass to CSS
                ]
            },
            {test: /\.(png|jpg|svg|gif)$/, loader: 'url-loader?limit=25000&name=public/[name][hash:8].[ext]'},//指定图片路径
            {test: /\.(woff|ttf|eot|woff2)$/, loader: 'url-loader?limit=100000'},
            {test: /\.(md|markdown)$/, use: ['html-loader', 'markdown-loader']},
        ],
    },
    resolve: {
        extensions: [ '.web.js','.js', '.jsx','.scss','.less','.css']
    },
    devServer: {
        proxy: {
            '/api':{
                target: 'http://localhost:8080',
                pathRewrite: {"^/api" : ""}
            },
            '/nfs_data':{
                target: 'http://172.16.136.71',
            },
        },
        contentBase: [path.join(__dirname, 'public')],//t
        historyApiFallback: true,
        disableHostCheck: true,
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by Jerry'),
        new webpack.DefinePlugin({

            'process.env': {
                NODE_ENV: JSON.stringify('production'),//实现React切换到产品环境的插件
            },
            //定义全局变量，
          VERSION: JSON.stringify("1.3.6"),
        }),
        new webpack.LoaderOptionsPlugin({
            ////帮你解决浏览器前缀、IE兼容问题
            options: {
                postcss: function(){
                    return [
                        require("autoprefixer")({
                            browsers: ['ie>=8','>1% in CN','iOS >= 8', 'Android >= 4']
                        }),
                    ]
                }
            }
        }),


        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor',
            filename:'public/[name].[chunkhash:5].js'//抽取代码分割文件的公共部分，减少代码分割引入通用库重复加载浪费
        }),
        new HtmlWebpackPlugin({
            chunks: [ 'main','vendor',],
            filename: 'public-html/index.html',
            template: './static/index.html',
            title: '随行付风控限额系统',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency',
        }),
        new UglifyJSPlugin({
            compress:{warnings:false},//代码压缩
        }),
        new CompressionPlugin({//压缩gzip
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.(js|html)$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
}
