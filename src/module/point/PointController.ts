import Router from 'koa-router';

const _createImage = function () {
  return Buffer.from([0x0a])
}


const pointController = new Router({
  prefix: '/point'
});

/**
 * 埋点图片处理
 */
pointController.get('/', async (ctx, next) => {
  ctx.set('content-type', 'image/png');
  ctx.body = _createImage()
})


pointController.get('/a.png', async (ctx, next) => {
  console.log(ctx.query)
  console.log(ctx.query.v)
  console.log(ctx.query.t)

  ctx.set('content-type', 'image/png');
  ctx.body = _createImage()
})


export {
  pointController
}
