"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const router_1 = __importDefault(require("../user/router"));
const router = new koa_router_1.default({
    prefix: '/v1'
});
router.use(router_1.default.routes(), router_1.default.allowedMethods());
exports.default = router;
