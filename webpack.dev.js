const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

module.exports = merge(common, {

  devtool: 'inline-source-map',
  output: {
    publicPath: '/',
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

      new CopyWebpackPlugin([
        { from: 'assets/images/sprites/', to: 'assets/images/sprites/' },
        { from: 'assets/images/content/', to: 'assets/images/content/'},
        { from: 'json/', to: 'json/'},
      ]),

      new HtmlWebpackPlugin({
       title: 'Portfolio Главная',
       template: './views/pages/index.pug',
       chunks: ['index'],
       filename: './index.html'
      }),

      new HtmlWebpackPlugin({
       title: 'Login',
       template: './views/pages/login.pug',
       chunks: ['login'],
       filename: './login.html'
      }),
      
      new HtmlWebpackPlugin({
       title: 'Web blog',
       template: './views/pages/blog.pug',
       chunks: ['blog'],
       filename: './blog.html'
      }),

      new HtmlWebpackPlugin({
       title: 'About me',
       template: './views/pages/about.pug',
       chunks: ['about'],
       filename: './about.html'
      }),

      new HtmlWebpackPlugin({
       title: 'Мои работы',
       template: './views/pages/my_works.pug',
       chunks: ['my_works'],
       filename: './my_works.html'
      }),

      new HtmlWebpackPlugin({
       title: 'Админ',
       template: './views/pages/admin.pug',
       chunks: ['admin'],
       filename: './admin.html'
      }),
    ]
  });