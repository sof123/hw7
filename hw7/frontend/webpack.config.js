module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015','stage-2']
        }
      }
    ]
  },
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  }
};
