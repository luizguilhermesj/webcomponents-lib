const path = require('path');
const glob_entries = require('webpack-glob-entries');
const glob = require("glob");
var fs = require('fs');
const entry = glob_entries('./src/**/*.js');

// const entry = glob.sync("./src/**/*.js").reduce((acc, file) => {
//   acc[file.replace(/^\.\/src\//, "")] = file;
//   return acc;
// }, {});


// const entry = fs.readdirSync('./src/').filter(function(file) {
//   return file.match(/.*\.js$/);
// }).map((file) => {
//   return './src/'+file;
// });
console.log(entry);

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      {
         test: /\.css|\.s(c|a)ss$/,
         use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'sass-loader',
        ],
       },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
  ],
  mode: 'development',
}
