
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {

  devtool: 'source-map',

  output: {
    
     publicPath: 'https://yuliyavolkova.github.io/portfolio_pages/',
  },

  plugins: [
      new UglifyJSPlugin({sourceMap: true,
      					compress: true,
      				}),

     new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
     }),

     new CleanWebpackPlugin(['build']),

     new HtmlWebpackPlugin({
       title: 'Portfolio Главная',
       template: './pug/pages/index/index.pug',
       chunks: ['index', 'common'],
       filename: './index.html'
      }),

      new HtmlWebpackPlugin({
       title: 'Web blog',
       template: './pug/pages/blog/blog.pug',
       chunks: ['blog', 'common'],
       filename: './pages/blog.html'
      }),

      new HtmlWebpackPlugin({
       title: 'Site admin',
       template: './pug/pages/admin/admin.pug',
       chunks: ['admin', 'common'],
       filename: './pages/admin.html'
      }),

      new HtmlWebpackPlugin({
       title: 'Мои работы',
       template: './pug/pages/my_works/my_works.pug',
       chunks: ['my_works', 'common'],
       filename: './pages/my_works.html'
      }),
    new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),

     new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),

      // Minify CSS
   	/* new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),*/
  ]
});