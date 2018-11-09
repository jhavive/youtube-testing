const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

module.exports = {
    output: {
        // Compile into js/build.js
        path: path.resolve(process.cwd(), 'build'),
        publicPath: '/youtube-testing',
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/,
            use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    importLoaders: 1,
                    localIdentName: '[name]_[local]_[hash:base64]',
                    sourceMap: true,
                    minimize: true
                }
            }
            ]
        }
        ]
    },
    plugins: [htmlPlugin]
}