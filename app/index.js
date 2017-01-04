import Koa from 'koa';
import config from  'config';

const app = new Koa();

app.listen(config.server.port, function () {
    console.log('%s listening at port %d', config.app.name, config.server.port);
});
