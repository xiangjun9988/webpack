var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // entry: [__dirname+'/src/js/entry.js',__dirname+'/src/js/home.js'],
  entry:{
    "app":__dirname+"/src/js/app.js",
    "home":__dirname+"/src/js/home.js",
  },
  output: {
    path: __dirname+"/build",
    filename: '/js/[name].bundle.[hash].js'
  },
  plugins: [
      new HtmlWebpackPlugin({
        title: '这是第一个webpack项目',
        filename: './index.html'
      })
    ],
    resolve:{
      extensions:['.js','.css']
    },
     module: {
        loaders: [{
            test: /\.css$/, 
            loader: 'style-loader!css-loader'
          }]
    }
}