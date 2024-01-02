const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js", // Assuming your entry point is "index.js"
  output: {
    path: path.resolve(__dirname, "./docs"),
    publicPath: '/',
    filename: "index_bundle.js",
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  devServer: {
    static: {
      directory: path.join(__dirname, "docs"),
    },
    historyApiFallback: true,
    open: true,
    port: 3000,
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: "file-loader?name=fonts/[name].[ext]!static",
      },
    ],
  },
};

// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const path = require("path");

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     path: path.resolve(__dirname, "./docs"),
//     filename: "index_bundle.js",
//   },
//   plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
//   devServer: {
//     contentBase: path.join(__dirname, "docs"),
//     open: true,
//     port: 3000,
//     proxy: {
//       "/api": "http://localhost:8080",
//     },
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         test: /\.(woff|woff2|ttf|eot)$/,
//         use: "file-loader?name=fonts/[name].[ext]!static",
//       },
//     ],
//   },
// };
