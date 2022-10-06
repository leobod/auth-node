"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.accessLogger = void 0;
const path_1 = __importDefault(require("path"));
const koa_log4_1 = __importDefault(require("koa-log4"));
const RUNTIME_PATH = path_1.default.resolve(__dirname, '../../');
const LOG_PATH = path_1.default.join(RUNTIME_PATH, 'logs');
koa_log4_1.default.configure({
    // 日志的输出
    appenders: {
        access: {
            type: 'dateFile',
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            encoding: 'utf-8',
            filename: path_1.default.join(LOG_PATH, 'access.log') //生成文件名
        },
        application: {
            type: 'dateFile',
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            encoding: 'utf-8',
            filename: path_1.default.join(LOG_PATH, 'application.log')
        },
        out: {
            type: 'console'
        }
    },
    categories: {
        default: { appenders: ['out'], level: 'info' },
        access: { appenders: ['access'], level: 'info' },
        application: { appenders: ['application'], level: 'all' }
    }
});
const accessLogger = () => koa_log4_1.default.koaLogger(koa_log4_1.default.getLogger('access')); // 记录所有访问级别的日志
exports.accessLogger = accessLogger;
const logger = koa_log4_1.default.getLogger('application');
exports.logger = logger;
