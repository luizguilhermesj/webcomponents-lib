const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },

      // Transforming SCSS file into CSS string
      {
        test: /\.scss$/,
        use: [
          'raw-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'node_modules')]
            }
          }
        ]
      },
    ]
  },
  mode: 'development',
}


module.exports = {

  entry: { /* config */ },

  output: { /* config */ },

  module: {
    rules: [
      // Regular css files
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },

      // Transforming SCSS file into CSS string
      {
        test: /\.scss$/,
        use: [
          'raw-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'node_modules')]
            }
          }
        ]
      },
    ]
  },
  plugins: [],
};