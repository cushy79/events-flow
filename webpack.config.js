module.exports = {
  entry: ['./src/index.js'],
  target: 'node',
  output: {
    path: './build',
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [/node_modules/]
      }
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  }
}
