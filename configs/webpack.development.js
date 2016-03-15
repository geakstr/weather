var path = require("path");
var webpack = require("webpack");
var autoprefixer = require("autoprefixer");

var root = path.join(__dirname, "../");

var paths = {
  root: root,
  base: path.join(root, "html"),
  www: path.join(root, "www"),
  js: path.join(root, "js"),
  sass: path.join(root, "sass"),
  html: path.join(root, "html")
};

module.exports = {
  context: paths.js,
  entry: {
    app: "index.js"
  },
  output: {
    path: paths.www,
    filename: "app.js",
    publicPath: "/assets/"
  },
  resolve: {
    root: [paths.js],
    extensions: ["", ".js"]
  },
  devtool: "source-map",
  devServer: {
    port: 8888,
    contentBase: paths.base,
    hot: true,
    inline: true,
    historyApiFallback: true
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["react-hot", "babel"]
    }, {
      test: /\.scss$/,
      loader: "style!css!postcss!sass"
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: "file?hash=sha512&digest=hex&name=/assets/imgs/[hash].[ext]"
    }]
  },
  postcss: [autoprefixer({ browsers: ["last 2 versions"] })],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
