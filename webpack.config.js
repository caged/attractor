/* eslint-env node */
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    // new CopyWebpackPlugin([{ from: "public/data", to: "data" }]),
    new HtmlWebpackPlugin({
      // template: path.resolve(__dirname, "public", "index.html"),
      favicon: path.resolve(__dirname, "public", "favicon.ico"),
      title: ""
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
