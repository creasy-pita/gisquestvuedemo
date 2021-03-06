const config = require('./config'+  (process.env.webpack_config===undefined ?'':('/'+ process.env.webpack_config+'.index')))
const EndWebpackPlugin = require('./config/plugins/EndWebpackPlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
console.log(process.env.webpack_config)
console.log(config.assetPublicPath)

module.exports = {
    publicPath: config.assetPublicPath, 
    configureWebpack: {
        plugins: [    
          new HtmlWebpackPlugin( {
            title: 'My App',
            template: 'src/template/demo.html',
            filename:'test.html',
            inject: false,
            libName: 'gisqshoppingcart',
            assetsFileName: 'gisqshoppingcart',  //此名称需要时filename ,还需要再再琢磨          
          }),
        //   new EndWebpackPlugin(compilation => {
        //     //console.info('after webpack all done',compilation)
        // } )
        ]
      }    
    // chainWebpack: config => {
    //   config
    //     .plugin('html')
    //     .tap(args => {
    //       args[0].template = 'src/template/libModelindex.html'
    //       return args
    //     })
    // }
  }
