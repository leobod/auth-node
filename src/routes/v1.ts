
import Router from 'koa-router';

import User from "../user/router";

const router = new Router({
  prefix: '/v1'
});

router.use(User.routes(), User.allowedMethods());

export default router

