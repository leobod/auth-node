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
const router = new koa_router_1.default({
    prefix: '/image'
});
/**
 * 埋点图片处理
 */
router.get('/', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const buriedPointFile = Buffer.from([0x0a]);
    ctx.set('content-type', 'image/png');
    ctx.body = buriedPointFile;
}));
router.get('/a.png', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(ctx.query);
    console.log(ctx.query.v);
    console.log(ctx.query.t);
    const buriedPointFile = Buffer.from([0x0a]);
    ctx.set('content-type', 'image/png');
    ctx.body = buriedPointFile;
}));
exports.default = router;
