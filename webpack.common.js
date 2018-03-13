
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractNormalizeCSS = new ExtractTextPlugin('./assets/css/normalize.css');
const extractSass = new ExtractTextPlugin({filename: './assets/css/styles.[name].css', allChunks:true});
const autoprefixer = require('autoprefixer');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {

  context: path.resolve(__dirname, 'src'),

  entry: {
    index: ['./app/index.js'],
    blog: ['./app/blog.js'],
    about: ['./app/about.js'],
    my_works: ['./app/my_works.js']
  },

   output: {

     path: path.resolve(__dirname, 'build'),
     filename: 'app/[name].bundle.js',
   },

  module: {
    rules: [
      {
        test: /\.(svg)$/i,   //to support eg. background-image property 
        loader:'file-loader',
        options:{
        name:'[path][name].[ext]',
        }
      },
      {
      test: /\.(svg)$/i,   //sprite 
      include: path.resolve(__dirname, 'src/assets/images/sprites/to_sprite/'),
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            extract: true,
            spriteFilename:  'assets/images/sprites/sprite.svg',
          }
        },
       	{
         loader: 'svgo-loader',
          options: {
          plugins: [
            { removeAttrs: { attrs: '(fill|stroke)' } },
            ],
          },
        },
       ],
      },
      {
      test: /\.(jpg)$/i,   //to support eg. background-image property 
      use: [ {
          loader: 'file-loader',
          options: {
            name:'[path][name].[ext]',
            },
          },
          {
          loader: 'image-webpack-loader',
          options: {
             bypassOnDebug: true,
             mozjpeg: {
              progressive: true,
              quality: 90,
             }
            }
          }
        ]
      },
      {
      test: /\.(png)$/i,   
      use: [ {
          loader: 'file-loader',
          options: {
            name:'[path][name].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
             bypassOnDebug: true,
             optipng: {
              optimizationLevel: 7,
              enabled: false,
             },
             pngquant: {
              quality: '90-100',
             },
            },
          },
        ]
      },
      {
      test: /\.(gif)$/i,   //to support eg. background-image property 
      use: [ {
          loader: 'file-loader',
          options: {
            name:'[path][name].[ext]',
            },
          },
          {
          loader: 'image-webpack-loader',
          options: {
             bypassOnDebug: true,
            gifsicle: {
              interlaced: false,
              optimizationLevel: 1
            },
            },
          },
        ]
      },
      {
      test: /\.(woff(2)?|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,    //to support @font-face rule 
      loader: 'url-loader',
      options:{
        limit:'3000',
        mimetype: "application/font-woff",
        name:'[path][name].[ext]',
        }
      },
     { 
      test: /\.css$/,
      exclude: path.resolve(__dirname, 'src/assets/styles/css/'),
      use: extractNormalizeCSS.extract({
        use: [{ loader: 'css-loader', 
                options: {
                  minimize: true
                }
              },
                'postcss-loader']
        })
      },
      {
      test: /\.(scss|sass)$/,
      use: extractSass.extract({
        fallback: 'style-loader',
        use: [{ loader:'css-loader',
                options: {sourceMap: true} 
              },
              {loader: 'postcss-loader',
               options: {sourceMap: 'inline'}
             },
              { loader:'sass-loader',
                options: {sourceMap: true} 
              }
            ] 
        })    
      },
      {
        test: /\.(pug|jade)$/,
        exclude: /node_modules/,
        loader: "pug-lint-loader",
        options: require('./.pug-lintrc.js'),
        enforce: "pre"
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
          options: {
                pretty: true
            }
      },
      {
       test: /\.html$/,
          loader: "html-loader",
          options: {
                interpolate: true
          }
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
          options: {
              fix: true
            } 
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
            options: {
              presets: ['env', "stage-0"]
            }
      },
    ],
  },

  plugins: [

    extractNormalizeCSS,

    extractSass,

    new FaviconsWebpackPlugin({
    
      logo: './logo.svg',
      prefix: 'icons-[hash]/',
      // Emit all stats of the generated icons
      emitStats: false,
      // The name of the json containing all favicon information
      //  statsFilename: 'iconstats-[hash].json',
      // Generate a cache file with control hashes and
      // don't rebuild the favicons until those hashes change
      persistentCache: true,
      // Inject the html into the html-webpack-plugin
      inject: true,
      // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
      background: '#FFF',
      // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
      title: 'web_portfolio',

      // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),

    // Make sure that the plugin is after any plugins that add images
    // These are the default options:
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      disable: false,
      optipng: null,
      gifsicle: {
        optimizationLevel: 1
      },
      mozjpeg: {
              progressive: true,
              quality: 90,
             },
      jpegtran: {
        progressive: true
      },
      svgo: {
      },
      pngquant: {
              
              quality: '90-100',        
      }, 
      plugins: []
    }),
    
     new SpriteLoaderPlugin({plainSprite: true }),

  ],
 };