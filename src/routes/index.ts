import Router from 'koa-router';
import router_v1 from './v1'

const router = new Router()
router.get('/', async (ctx, next) => {
  // 打印请求头
  // console.log(ctx.request.headers)
  // 设置响应头
  ctx.set('Content-Type', 'application/json')
  ctx.body = {
    a: 1,
    b: 2
  }
})

router.use(router_v1.routes(), router_v1.allowedMethods())

export default router;
