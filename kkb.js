// koa实现的主文件
//  koa最主要的就是解决回调函数


// 解决上下文，
/*
context 
上下文概念，
那么问题就来了，什么叫上下文。作用是什么？
他是将请求对象res和响应对象req封装并挂载到context上。并且在context上设置了setter和setter语法。从而简化操作。

*/
const http =require('http')
const context =require('./context')
const request =require('./request')
const response =require('./response')
class Kkb {
  listen (...arg) {
    http.createServer((req, res) => {
      // ?
      const ctx = this.createContext(req, res)
      this.callback(ctx) // 将用户传进来的上下文。进行处理ctx
      // 给用户返回信息
      res.end(ctx.body) // body就不一样了，然后就在给res
    })
    .listen(...arg)
  }
  use (callback){
    this.callback = callback
  }
  createContext(req, res){
    // 上下文的对象怎么来的？
    const ctx = Object.create(context)
    ctx.request = Object.create(request)
    ctx.response = Object.create(response)
    // ?ctx可以访问封装的请求，也可以访问原始的请求
    ctx.req = ctx.request.req = req
    ctx.res = ctx.response.res = res
    return ctx
  }
}
module.exports = Kkb