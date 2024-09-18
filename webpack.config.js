const mode = process.env.NODE_ENV=="production"?"production":"development"
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
module.exports = {
    mode:mode,
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'), // Serve files from the 'dist' directory,
        },
        // port: 3000,
    },
    devtool:"source-map",
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
        }),
    ]
}