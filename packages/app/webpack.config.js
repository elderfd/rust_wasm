const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dist = path.resolve(__dirname, "dist");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.ts"
    },
    output: {
        path: dist,
        filename: "[name].js"
    },
    experiments: {
        syncWebAssembly: true
    },
    module: {
        rules: [
            {
                test: /\.wasm$/,
                type: "webassembly/sync"
            }
        ]
    },
    devServer: {
        contentBase: dist,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ]
};