const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/js/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'assets', 'js'),
        publicPath: 'assets/js/'
    },
    // devServer: {
    //   contentBase: './'
    // }
};