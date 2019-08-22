module.exports = {
  get body() {
    return this._body
  },

  //  当用户去执行response.body的时候，会将val缓存在局部变量里面。然后找个合适的时机，给用户去响应数据
  /*
  app.use(async ctx => {
    ctx.body = 'Hello World'; 对应的就是这句话
  });
  */
  set body (val) {
    this._body = val
  }

  

}