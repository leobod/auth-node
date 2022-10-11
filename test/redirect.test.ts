import koa from 'koa';
import Router from 'koa-router';

const app = new koa();
const _router = new Router();   //实例化路由器

_router.get('/not_found', async (ctx)=>{   //定义路由
  ctx.status = 404;
  ctx.body = "抱歉，我们没有此资源。";
});

_router.get('/hello', async (ctx)=>{   //定义路由
  ctx.status = 200;
  ctx.body = 'hello world';
});

_router.get('/redirect', async (ctx)=>{   //定义路由
  ctx.status = 301;
  ctx.header.location = 'http://www.baidu.com'
  // ctx.set('Location', 'http://www.baidu.com');
});

_router.get('/test', async (ctx)=>{   //定义路由
  throw new Error('异常')
});

async function *handle404Errors(ctx, next) {
  yield next;
  if (404 != ctx.status) return;
  this.redirect('/not_found');
}

async function *handle500Errors(ctx, next) {
  try {
    yield next;
  } catch (err) {
    console.log(err)
    this.body = err.message;
    this.app.emit('error', err, this);
  }
}



app.use(_router.routes());  //使用路由器定义的路由
//错误处理中间件
app.use(handle404Errors);
app.use(handle500Errors);

app.listen(3001);
