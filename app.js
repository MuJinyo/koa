// const Koa = require('koa');
// const app = new Koa();

// // logger

// app.use(async (ctx, next) => {
//   await next();
//   const rt = ctx.response.get('X-Response-Time');
//   console.log(`${ctx.method} ${ctx.url} - ${rt}`);
// });

// // x-response-time

// app.use(async (ctx, next) => {
//   const start = Date.now();
//   console.log('start', start)
//   await next();
//   const ms = Date.now() - start;
//   ctx.set('X-Response-Time', `${ms}ms`);
// });

// // response

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

// app.listen(3000);

const Kkb = require('./kkb');
const app = new Kkb();
app.use((ctx) => {
    ctx.body = 'hello mujin'
})
console.log('app', app)
app.listen(3000)