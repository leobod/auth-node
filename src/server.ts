import Koa from 'koa';
import { initMiddleWare } from "./middleware";
/* 加载自定义路由 */
import router_app from './routes';

const app = new Koa();
initMiddleWare(app);
app.use(router_app.routes());
const PORT = 7788

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
