// webpack.config.js
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/js/app.js'
  },
  output:{path:path.resolve(__dirname, './public/assets/js'),filename: 'app.js',}  ,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ]
}