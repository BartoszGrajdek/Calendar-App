const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'assets', 'js'),
        publicPath: 'assets/js/'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './'
    },
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ]
};