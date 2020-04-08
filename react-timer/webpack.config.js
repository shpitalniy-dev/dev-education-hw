const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
          filename: 'index.css',
        })
      ],
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            },
          },
          {
            test: /\.less$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'less-loader'
            ],
          },
        ],
      },
}