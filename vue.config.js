module.exports = {
    configureWebpack: {
      resolve:{
        extensions:[],
        alias:{
          'assets':'@/assets',
          'common':'@/common',
          'components':'@/components',
          'network':'@/network',
          'views':'@/views',
        }
      }
    },
    lintOnSave: false
  }

// const path = require('path');//引入path模块
// function resolve(dir){
//     return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
// }

// module.exports={
   
//   chainWebpack:(config)=>{
//       config.resolve.alias
//       .set('@',resolve('./src'))
//       .set('assets',resolve('./src/assets'))
//       .set('components',resolve('./src/components'))
//       .set('common',resolve('./src/common'))
//       .set('network',resolve('./src/network'))
//       .set('views',resolve('./src/views'))
//       //set第一个参数：设置的别名，第二个参数：设置的路径
// 　　　　
//   }
// }