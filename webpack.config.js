const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./main.js",
  output: {
    filename: "bundle.js",
  },
  plugins: [new HtmlWebpackPlugin()],
};
