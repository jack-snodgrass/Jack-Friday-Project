const path = require('path')

module.exports = {
  entry: './website-frontend/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.js$|jsx/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.(s[ac]ss|css)$/i,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
}
