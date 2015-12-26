var koa = require('koa');
var logger = require('koa-logger');
var bodyParser = require('koa-bodyparser');
var dotenv = require('dotenv')
var router = require('./router');
var wrap = require('./middleware/wrap');
var app = koa();

global.EAPI = require('./lib/Eapi');

//env init
process.env.NODE_ENV == 'production' ? dotenv.load() : dotenv.load({path: __dirname + '/.env_dev'});

//middleware
app.use(bodyParser());
app.use(logger());
app.use(wrap);

//routes config
router(app);

var port = process.env.PORT || 3001;
app.listen(port);
