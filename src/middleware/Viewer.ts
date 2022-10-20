
import path from "path";
const view = require('koa-view');


const initViewer = function (app) {
  // Must be used before any router is used
  app.use(view(path.join(__dirname, '../template')));
}

export {
  initViewer
}
