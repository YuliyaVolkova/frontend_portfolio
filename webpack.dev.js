const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

module.exports = merge(common, {

  devtool: 'inline-source-map',

  output: {

     publicPath: 'http://localhost:8080/',
    // publicPath: 'https://yuliyavolkova.github.io/portfolio_pages/',
   },

  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    inline: true,
    progress: true,
    historyApiFallback: true,
    host: HOST,
    port: PORT,
  },

   plugins: [
      new BrowserSyncPlugin(
      {
        host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:8080/'
      },

      // plugin options
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: false
      }),

      new HtmlWebpackPlugin({
       title: 'Portfolio Главная',
       template: './index.pug',
       chunks: ['index'],
       filename: './index.html'
      }),

      new HtmlWebpackPlugin({
       title: 'Web blog',
       template: './pages/blog.pug',
       chunks: ['blog'],
       filename: './pages/blog.html'
      }),

      new HtmlWebpackPlugin({
       title: 'About me',
       template: './pages/about.pug',
       chunks: ['about'],
       filename: './pages/about.html'
      }),

      new HtmlWebpackPlugin({
       title: 'Мои работы',
       template: './pages/my_works.pug',
       chunks: ['my_works'],
       filename: './pages/my_works.html'
      }),
    ]
  });