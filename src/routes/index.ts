import Router from 'koa-router';
import router_v1 from './v1'
import { demoController } from "../module/demo/DemoController";

const router = new Router()

/**
 * get返回普通文本
 */
router.get('/', async (ctx, next) => {
  ctx.body = 'Hello,NodeJS'
})

router.use(router_v1.routes(), router_v1.allowedMethods())
router.use(demoController.routes(), demoController.allowedMethods());

export default router;
