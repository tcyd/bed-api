var router = require('koa-router')();
var auth = require('./middleware/auth');
var index = require('./route/index');
var users = require('./route/users');

module.exports = function(app) {

  router
    .get('/', index.get)
    .get('/deny', index.deny);

  //authentication
  router
    .get('/users', auth, users.get);

  app
    .use(router.routes())
    .use(router.allowedMethods());
};