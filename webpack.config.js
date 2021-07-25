const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
    entry: resolve(__dirname, 'app/index.jsx'),

    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    devServer: {
        port: 4000,
        contentBase: resolve(__dirname, 'app'),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]

            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(scss|sass)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    'style-loader',
                    'css-loader',
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
            },
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.es6']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'app/index.html'),
            filename: 'index.html',
            inject: true,
        }),
    ]

}
