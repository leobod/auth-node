import fs from "fs";
import path from "path";
import Router from 'koa-router';


/**
 * 上传的controller
 */
const uploadController = new Router({
  prefix: '/upload'
});


uploadController.post('/uploadfile', async (ctx, next) => {
  // 上传单个文件
  // console.log(ctx.request.files)
  const file = ctx.request.files.file; // 获取上传文件
  // 创建可读流
  // @ts-ignore
  const reader = fs.createReadStream(file.filepath);
  // 需要先保证文件夹存在
  // @ts-ignore
  let filePath = path.join(__dirname, '../../../static/upload/') + `/${file.newFilename}`;
  // 创建可写流
  const upStream = fs.createWriteStream(filePath);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);
  return ctx.body = "上传成功！";
});

export {
  uploadController
}
