import Koa from 'koa';

const app = new Koa();

app.use(async (ctx, next) => {
const start = new Date();
await next();
const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// response
app.use((ctx) => {
    ctx.body = 'Hello Koa in app-async.js';
  });

app.listen(3000);        //或者 app.listen(3000, () => console.log('系统启动，端口：3000'))

console.log("系统启动，端口：3000");

