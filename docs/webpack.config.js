const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: './index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'app.bundle.js'
  },
  devServer: {
    port: 3007
  },
  module: {
    rules: [
      { test: /\.[tj]sx?$/, use: ['babel-loader'] },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.mdx?$/, use: [require.resolve('raw-loader')] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    // Set by scripts/start.mjs; empty means every slides directory
    new DefinePlugin({ 'process.env.SLIDES_DIR': JSON.stringify(process.env.SLIDES_DIR || '') }),
  ]
};
