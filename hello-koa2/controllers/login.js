'use strict'

var fn_index = (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = "<h1>Index</h1><form action='/signin' method='GET'><p>Name: <input name='name' value='koa'></p><p>Password: <input name='password' type='password'></p><p><input type='submit' value='Submit'></p></form>";
};
var fn_signin = (ctx, next) => {
    console.log(ctx);
    // var
    //     name = ctx.request.body.name || '',
    //     password = ctx.request.body.password || '';
    // console.log(`signin with name: ${name}, password: ${password}`);
    // if (name === 'VICKY' && password === '12345') {
    //     ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    // } else {
    //     ctx.response.body = `<h1>Login failed!</h1>
    //     <p><a href="/">Try again</a></p>`;
    // }
};
module.exports = {
    'GET /': fn_index,
    'GET /signin': fn_signin
};