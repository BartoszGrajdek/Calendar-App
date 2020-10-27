const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: './src/js/app.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets', 'js'),
        publicPath: 'assets/js/',
    },
    devtool: 'cheap-source-map',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    useBuiltIns: 'usage',
                                    corejs: { version: 3 },
                                },
                            ],
                        ],
                    },
                },
            },
        ],
    },
    plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
