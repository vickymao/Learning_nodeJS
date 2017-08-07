'use strict'

const Koa = require('koa');

const app = new Koa();

// app.use((ctx, next) => {

//     console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
// });

const controller = require('./controller');
app.use(controller());

app.listen(3000);
console.log('app started at port 3000 ...');