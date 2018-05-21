const path = require('path');

module.exports = {
  output: {
    path: path.resolve('./public'),
    filename: '[name].js'
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /src.*\.js$/,
        use: [
          {
            loader: "closure-loader",
            options: {
              paths: [
                __dirname + '/src'
              ],
            },
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
};