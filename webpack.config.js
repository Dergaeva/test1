// const path = require('path');
// const webpack = require('webpack');
// const HtmlPlugin = require('html-webpack-plugin');
// const textPlugin = require('extract-text-webpack-plugin');
// const args = require('yargs').argv;
//
// let styleLoader = [
//     {loader: "style-loader"}, {loader: "css-loader"}, {loader: "sass-loader"}
// ];
//
// const plugins = [
//     new HtmlWebpackPlugin(),
//     new webpack.optimize.CommonsChunkPlugin({
//         name: 'vendor',
//         filename: 'vendor.js'
//     }),
//     new webpack.HotModuleReplacementPlugin()
// ];
//
//
// if (args.env && args.env.styles) {
//     plugins.push(
//         new textPlugin({
//             filename: 'main.css'
//         })
//     );
//
//     styleLoader = textPlugin.extract({
//         fallback: 'style-loader',
//         use: [ {loader: "css-loader"}, {loader: "sass-loader"} ]
//     });
// }
//
// module.exports = {
//     entry: {
//         main: './app.js',
//         vendor: ['jquery']
//     },
//     context: path.resolve(__dirname, 'src'),
//     output: {
//         filename: '[name]-bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//
//     devServer: {
//         contentBase: path.resolve(__dirname, 'dist'),
//         hot: !(args.env && args.env.style),
//         publicPath: '/',
//         port: 9000
//     },
//
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: path.resolve(__dirname, 'node_modules'),
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['env']
//                     }
//                 }
//             },
//             {
//                 test: /\.s?css$/,
//                 use: styleLoader
//             }
//         ]
//     },
//
//     plugins
// };


const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  textPlugin = require('extract-text-webpack-plugin');

module.exports = {
    //entry: './app.js', //path expected
    entry: {
        main: './app.js',
        vendor: ['jquery'] //[array of filepaths] if npm used - just name
    },
    context: path.resolve(__dirname, 'src'),
    output: {
        filename: '[name]-bundle.js', //filename expected
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: path.resolve(__dirname, 'node_modules'),
            use: {
                loader: 'babel-loader',
                options: { presets: ['env'] }
            }
        },
            // {
            //  test: /\.css$/,
            //  use: ['style-loader', 'css-loader']
            // },
            {
                test: /\.s?css$/,
                use: textPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }

        ]
    },

    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
        new textPlugin({
            filename: 'main.css'
        })
    ]
};