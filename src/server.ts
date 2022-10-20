
import path from "path";

import Koa from 'koa'
const app = new Koa();

import {accessLogger } from "./middleware/log4j";
app.use(accessLogger())


import koaBody from "koa-body";
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 200*1024*1024, // 设置上传文件大小最大限制，默认2M
        keepExtensions: true, // 保持后缀名
    }
}));

// 配置跨域
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if(ctx.method=='OPTIONS'){
        ctx.body = 200;
    }else{
        await next()
    }
})


/* 使用mount与static,挂载虚拟路径给指定的静态文件 */
import mount from 'koa-mount'
import static_file from 'koa-static'

app.use(
  mount(
    '/static',
    static_file(
      path.join(__dirname, '../static'),
      {
        index: false,    // 默认为true  访问的文件为index.html  可以修改为别的文件名或者false
        hidden: false,   // 是否同意传输隐藏文件
        defer: true      // 如果为true，则在返回next()之后进行服务，从而允许后续中间件先进行响应
      }
    )
  )
);

/* 加载自定义路由 */
import router_app from './routes'
app.use(router_app.routes())

const PORT = 7788

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
