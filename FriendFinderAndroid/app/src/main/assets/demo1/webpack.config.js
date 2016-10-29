module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: 'dist',
    filename: 'index.js',
    publicPath: 'dist'
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' }
    ]
  },
  devtool: 'eval'
}
