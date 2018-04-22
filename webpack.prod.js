const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  devtool: 'source-map',
  output: { 
     //publicPath: '/portfolio_pages/',
     publicPath: '/',
  },

  plugins: [
      new UglifyJSPlugin({sourceMap: true,
      					compress: true,
      				}),

      new CopyWebpackPlugin([
    { from: 'assets/images/sprites/', to: 'assets/images/sprites/' },
   { from: 'assets/images/content/', to: 'assets/images/content/'},
   { from: 'json/', to: 'json/'},
     ]),
     new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
     }),

     new CleanWebpackPlugin(['build']),

     new HtmlWebpackPlugin({
       title: 'Portfolio Главная',
       template: './views/pages/index.pug',
       chunks: ['index', 'common'],
       filename: './index.html'
      }),

     new HtmlWebpackPlugin({
       title: 'Login',
       template: './views/pages/login.pug',
       chunks: ['login', 'common'],
       filename: './login.html'
      }),

      new HtmlWebpackPlugin({
       title: 'Web blog',
       template: './views/pages/blog.pug',
       chunks: ['blog', 'common'],
       filename: './blog.html'
      }),

      new HtmlWebpackPlugin({
       title: 'About me',
       template: './views/pages/about.pug',
       chunks: ['about', 'common'],
       filename: './about.html'
      }),

      new HtmlWebpackPlugin({
       title: 'Мои работы',
       template: './views/pages/my_works.pug',
       chunks: ['my_works', 'common'],
       filename: './my_works.html'
      }),

      new HtmlWebpackPlugin({
       title: 'Админ',
       template: './views/pages/admin.pug',
       chunks: ['admin', 'common'],
       filename: './admin.html'
      }),
    new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
   	new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ]
});