const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/js/app.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets', 'js'),
        publicPath: 'assets/js/'
    },
    devtool: 'cheap-source-map',
    devServer: {
      contentBase: './'
    },
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ]
};