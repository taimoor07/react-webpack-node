var path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js|\.jsx$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    },
    mode: "development",
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}