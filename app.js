import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';

import routes from './routes/index';

const app = new Koa();

app.use(logger())
   .use(parser())
   .use(routes.routes())
   .use(router.allowedMethods());

app.listen(3000);