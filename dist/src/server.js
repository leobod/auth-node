"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const koa_1 = __importDefault(require("koa"));
const app = new koa_1.default();
const log4j_1 = require("./middleware/log4j");
app.use((0, log4j_1.accessLogger)());
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
app.use((0, koa_bodyparser_1.default)());
/* 使用mount与static,挂载虚拟路径给指定的静态文件 */
const koa_mount_1 = __importDefault(require("koa-mount"));
const koa_static_1 = __importDefault(require("koa-static"));
app.use((0, koa_mount_1.default)('/static', (0, koa_static_1.default)(path_1.default.join(__dirname, '../static'), {
    index: false,
    hidden: false,
    defer: true // 如果为true，则在返回next()之后进行服务，从而允许后续中间件先进行响应
})));
/* 加载自定义路由 */
const routes_1 = __importDefault(require("./routes"));
app.use(routes_1.default.routes());
app.listen(8080, () => {
    console.log('http://localhost:8080');
});
