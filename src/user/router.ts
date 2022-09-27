import Router from 'koa-router';

const router = new Router({ //设置前缀
  prefix: '/user'
});

router.get('/string', async (ctx, next) => {
  ctx.body = 'user'
})

export default router
