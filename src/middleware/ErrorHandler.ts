import Router from 'koa-router';

const errorController = new Router();   //实例化路由器

errorController
  .get('/not_found', async (ctx, next) => {   //定义路由
    ctx.status = 404;
    ctx.body = "抱歉，我们没有此资源。";
  })
  .get('/404', async (ctx, next) => {
    ctx.status = 404;
    ctx.body = "抱歉，我们没有此资源。";
  })

const handle404Errors = async function (ctx, next) {
  await next();
  if (404 != ctx.status) return;
  ctx.redirect('/404');
}

const handle500Errors = async function (ctx, next) {
  try {
    await next();
  } catch (err) {
    ctx.body = err.message
  }
}

const initErrorHandler = function (app) {
  app.use(errorController.routes());
  app.use(handle404Errors)
  app.use(handle500Errors)
}


export {
  errorController,
  handle404Errors,
  handle500Errors,
  initErrorHandler
}
