
import Router from 'koa-router';

import { userController } from "../module/user/UserController";
import { pointController } from "../module/point/PointController";
import { uploadController } from "../module/upload/UploadController";

const router = new Router({
  prefix: '/v1'
});

router.use(userController.routes(), userController.allowedMethods());
router.use(pointController.routes(), pointController.allowedMethods());
router.use(uploadController.routes(), uploadController.allowedMethods());

export default router

