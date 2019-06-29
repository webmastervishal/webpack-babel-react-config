const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlplugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader'
            },
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader','css-loader']
        }]
    },
    plugins: [htmlplugin]
}