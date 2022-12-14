import Router from 'koa-router';
import { logger } from "../../middleware/Log4j";

const demoController = new Router({
  prefix: '/demo'
});

/**
 * get返回普通文本
 */
demoController
  .get('/', async (ctx, next) => {
    // 默认 text/html
    // ctx.set('Content-Type', 'text/html')
    ctx.body = `
      <div style="width: 60%; margin: 0 auto;">
        <h3> Hello, Nodejs </h3>
        <p> this is index of the demo site </p>
      </div>
    `
  })

/**
 * get返回普通文本
 */
demoController.get('/txt', async (ctx, next) => {
  ctx.body = 'Hello,NodeJS'
})

/**
 * get返回json范例
 */
demoController
  .get('/json', async (ctx, next) => {
      ctx.set('Content-Type', 'text/html')
      ctx.body = `
<pre>
 ctx.set('Content-Type', 'application/json')
 ctx.body = {
    type: 'application/json',
    message: 'Hello,NodeJS',
 } 
</pre>
  `
  })
  .post('/json', async (ctx, next) => {
    ctx.set('Content-Type', 'application/json')
    ctx.body = {
      type: 'application/json',
      message: 'Hello,NodeJS',
    }
  })

/**
 * 模拟query
 * @case  http://localhost:7788/demo/query?id=123
 */
demoController
  .all('/query', async (ctx, next) => {
    // console.log(ctx.url); // /demo/query?id=123
    // console.log(ctx.query); // [Object: null prototype] { id: '123' }
    // console.log(ctx.query.id) // 123
    ctx.set('Content-Type', 'application/json')
    ctx.body = ctx.query
  })

/**
 * 模拟参数
 */
demoController
  .get("/user/:id", async (ctx, next) => {
    const { id } = ctx.params
    ctx.body = `获取id为${id}的用户`;
  })

/**
 * post参数请求
 */
demoController
  .get('/postbody', async (ctx, next) => {
    ctx.response.body =
      `
      <form action="./postbody" method="post">
        <input name="name" type="text" placeholder="请输入用户名"/> 
        <br/>
        <input name="password" type="text" placeholder="请输入密码"/>
        <br/> 
        <button>GoGoGo</button>
      </form>
    `
  })
  .post('/postbody', async (ctx, next) => {
    const form = ctx.request.body
    console.log(form)
    ctx.set('Content-Type', 'application/json')
    ctx.response.body = form
  })

/**
 * 模拟异常或者404
 */
demoController
  .get('/not_found', async (ctx, next) => {
    ctx.status = 404;
    ctx.body = 'not_found'
  })
  .get('/error', async (ctx, next) => {
    throw new Error('手动触发异常')
  })

/**
 * koaview渲染html范例
 *  所以简单页面也可以直接IO读取html再返回给游览器
 */
demoController
  .get('/view', async (ctx, next) => {
    // @ts-ignore
    await ctx.render('demo')
  })

/**
 * logger使用demo
 */
demoController
  .get('/log', async (ctx, next) => {
    ctx.body = '正在访问log'
    logger.info('访问了一次log')
  })

/**
 * 环境
 */
demoController
  .get('/env', async (ctx, next) => {
    if (process.env.NODE_ENV === 'production') {
      ctx.body = 'production'
    } else {
      ctx.body = 'development'
    }
  })

export {
  demoController
}
