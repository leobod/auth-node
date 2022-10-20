import Router from 'koa-router';

const userController = new Router({ //设置前缀
  prefix: '/user'
});

userController.get('/string', async (ctx, next) => {
  ctx.body = 'user'
})

export {
  userController
}
