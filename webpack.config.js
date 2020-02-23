const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path');

module.exports = {
    entry:  resolve(__dirname, 'app/index.jsx'),

    output: {
        //debo darle una ruta absoluta
        path: resolve(__dirname, 'dist'),
        filename:   'bundle.js'
    },

    devServer: {
        port: 4000,
        contentBase: resolve(__dirname, 'app'),
        hot: true 
    },
    //lo que queramos que traduzca de los imports que se encuentre en los javascripts
    module: {
        rules:[
            {
                test: /\.css$/i,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader'}
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
        // resuelve extensiones al no indicarlas los import
        extensions: ['.js', '.jsx', '.es6'],
        alias: {
            'react-dom': '@hot-loader/react-dom'
          }
    },

    plugins: [
        //para copiar el archivo a la carpeta build
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'app/index.html'),
            filename: 'index.html',
	    //evitas que inyecte el bundle.js en el index.html
            inject: true,
        })
    ],

}