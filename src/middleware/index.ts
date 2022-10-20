
import { initBody } from "./Body";
import { initCors } from "./Cors";
import { initErrorHandler } from "./ErrorHandler";
import { initLogger } from "./Log4j";
import { initViewer } from "./Viewer";

const initMiddleWare = function (app) {
  initBody(app);
  initCors(app);
  initErrorHandler(app);
  initLogger(app);
  initViewer(app);
}

export {
  initMiddleWare
}
