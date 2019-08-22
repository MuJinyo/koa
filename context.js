// koa实现的主文件
//  koa最主要的就是解决回调函数
// 解决上下文，
/*
context 
上下文概念，
那么问题就来了，什么叫上下文。作用是什么？
他是将请求对象res和响应对象req封装并挂载到context上。并且在context上设置了getter和setter语法。从而简化操作。

返回的是json

在头部res.wirteHead()返回一个application/json


*/
// 我们替用户将req都封装好了，用户可以通过ctx.body去设置 不用去req.body去获取
module.exports = {
  get url() {
    return this.request.url
  },
  get body (){
    return this.response.body
  },
  set body (val) {
    this.response.body = val
  }

}