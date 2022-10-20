import Router from 'koa-router';

const demoController = new Router({
  prefix: '/demo'
});

/**
 * get返回普通文本
 */
demoController.get('/', async (ctx, next) => {
  ctx.body = 'Hello,NodeJS'
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
demoController.get('/json', async (ctx, next) => {
  ctx.set('Content-Type', 'application/json')
  ctx.body = {
    type: 'application/json',
    message: 'Hello,NodeJS'
  }
})

export {
  demoController
}
