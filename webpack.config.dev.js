module.exports = {
  mode: 'development',
  watch: true,
  devtool: 'inline-source-map',
  entry: {
    main: ['./src/client/index.js']
  },
  output: {
    publicPath: '/dist/',
    filename: './[name].bundle.js'
  },
  // no output as it is stored in memory
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        'sass-loader'
      ]
    }]
  }
};
