const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        filename: path.resolve(__dirname,"src/index.js")
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "index[contenthash].js",
        assetModuleFilename: "[name][ext]",
        clean: true

    },
    performance: {
        hints: false
    },
    devServer: {
        port: 9000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, "dist")
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/i,
                type: "asset/resource"  
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "Conquest",
            filename: "index.html",
            template: "src/index.html"
        })
    ]
}