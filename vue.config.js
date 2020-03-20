let config = {
  
  outputDir: 'demo',
  baseUrl: './',
  
  // 链式配置
  chainWebpack:(config) =>{
    
    config.devtool("source-map")
    
    // 代码分割
    const commonOptions = {
      chunks: 'all',
      reuseExistingChunk: true
    }
  },
  
  // 普通配置
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      return {
        plugins:[]
      }
      
    } else {
      // 为开发环境修改配置...
      return {
        plugins:[]
      }
    }
  },
}
module.exports = config