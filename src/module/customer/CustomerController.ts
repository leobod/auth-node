import Router from 'koa-router';

const customerController = new Router({ //设置前缀
  prefix: '/customer'
});

export {
  customerController
}
