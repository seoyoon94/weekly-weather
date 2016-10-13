let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: 'app/index.html',
  inject: 'body'
});

module.exports = {
  entry: './app/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.s?css$/,
        include: path.resolve(__dirname, "app"),
        loaders: [
          'style', 
          'css?modules&importLoaders=1&sourceMap&localIdentName=[local]___[hash:base64:5]',
          'resolve-url',
          'sass?outputStyle=expanded&sourceMap'
        ]  
      }
    ]
  },

  devtool: 'source-map',

  plugins: [
    HtmlWebpackPluginConfig
  ]
};
