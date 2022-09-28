
import Router from 'koa-router';


const router = new Router({
  prefix: '/image'
});

/**
 * 埋点图片处理
 */
router.get('/', async (ctx, next) => {
  const buriedPointFile = Buffer.from([0x0a])
  ctx.set('content-type', 'image/png');
  ctx.body = buriedPointFile
})


export default router
