"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const v1_1 = __importDefault(require("./v1"));
const image_1 = __importDefault(require("./image"));
const router = new koa_router_1.default();
router.get('/', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    // 打印请求头
    // console.log(ctx.request.headers)
    // 设置响应头
    ctx.set('Content-Type', 'application/json');
    ctx.body = {
        a: 1,
        b: 2
    };
}));
router.use(v1_1.default.routes(), v1_1.default.allowedMethods());
router.use(image_1.default.routes(), image_1.default.allowedMethods());
exports.default = router;
