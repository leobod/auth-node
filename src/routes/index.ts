import Router from 'koa-router';
import router_v1 from './v1'
import router_image from './image'

import * as fs from "fs";
import path from "path";

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

router.post('/uploadfile', async (ctx, next) => {
  // 上传单个文件
  console.log(ctx.request.files)
  const file = ctx.request.files.file; // 获取上传文件
  // 创建可读流
  // @ts-ignore
  const reader = fs.createReadStream(file.filepath);
  // 需要先保证文件夹存在
  // @ts-ignore
  let filePath = path.join(__dirname, './public/upload/') + `/${file.newFilename}`;
  // 创建可写流
  const upStream = fs.createWriteStream(filePath);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);
  return ctx.body = "上传成功！";
});

router.post('/uploadfiles', async (ctx, next) => {
  // 上传多个文件
  const files = ctx.request.files.file; // 获取上传文件
  // @ts-ignore
  for (let file of files) {
    // 创建可读流
    const reader = fs.createReadStream(file.filepath);
    // 获取上传文件扩展名
    let filePath = path.join(__dirname, 'public/upload/') + `/${file.newFilename}`;
    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
  }
  return ctx.body = "上传成功！";
});

router.use(router_v1.routes(), router_v1.allowedMethods())
router.use(router_image.routes(), router_image.allowedMethods())

export default router;
