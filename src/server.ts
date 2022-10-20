

import Koa from 'koa'
const app = new Koa();

import { initMiddleWare } from "./middleware";
initMiddleWare(app);

/* 加载自定义路由 */
import router_app from './routes'
app.use(router_app.routes())


const PORT = 7788

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
