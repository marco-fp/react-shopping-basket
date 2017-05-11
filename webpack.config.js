const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devServer: {
    port: 3000,
    contentBase: './dist',
    historyApiFallback: {
       rewrites: [{ from: /[^.]*/, to: '/index.html' }]
    }
  },

  entry: [
    'babel-polyfill',
    './app/index.js'
  ],

  output: {
    filename: 'bundle.js',
    path: '/dist',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ]
      }, {
        test: /(\.scss|\.css)/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            "postcss-loader",
            "sass-loader"
          ]
        })
      },
    ]
  },

  plugins: [
  // inject bundles to an html file
    new HtmlWebpackPlugin({
      inject: true,
      template: './app/index.html'
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: false,
      allChunks: true
    })
  ]
};
