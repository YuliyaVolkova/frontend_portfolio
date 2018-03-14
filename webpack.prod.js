
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {

  //devtool: 'source-map',

  output: {
    
     publicPath: 'https://yuliyavolkova.github.io/portfolio_pages/',
  },

  plugins: [
      new UglifyJSPlugin({sourceMap: true,
      					compress: true,
      				}),

      new CopyWebpackPlugin([
    { from: 'assets/images/sprites/', to: 'assets/images/sprites/' },
  //  { from: 'assets/images/content/menu/', to: 'assets/images/content/menu/'},
     ]),
     new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
     }),

     new CleanWebpackPlugin(['build']),

     new HtmlWebpackPlugin({
       title: 'Portfolio Главная',
       template: './index.pug',
       chunks: ['index', 'common'],
       filename: './index.html'
      }),

      new HtmlWebpackPlugin({
       title: 'Web blog',
       template: './pages/blog.pug',
       chunks: ['blog', 'common'],
       filename: './pages/blog.html'
      }),

      new HtmlWebpackPlugin({
       title: 'About me',
       template: './pages/about.pug',
       chunks: ['about', 'common'],
       filename: './pages/about.html'
      }),

      new HtmlWebpackPlugin({
       title: 'Мои работы',
       template: './pages/my_works.pug',
       chunks: ['my_works', 'common'],
       filename: './pages/my_works.html'
      }),
    new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),

   /*  new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),*/

      // Minify CSS
   	 new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ]
});