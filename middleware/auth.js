var moment = require('moment');
var crypto = require('crypto');
var _ = require('lodash');

module.exports = function *(next){

  var url = this.request.url;
  var timestamp = moment().format('HHmmss');
  var signature = _genSgin(url, timestamp);

  //对于非生产环境不验证
  if(process.env.NODE_ENV != 'production'){
    return yield *next;
  }

  if(this.request.header.Signature === signature) {
    return yield *next;
  }else{
    this.redirect('/deny');
  }
};

var _genSgin = function(url, timestamp){
  var params = {
    url: url,
    timestamp: timestamp
  };

  var paramsStr = '';
  var keys = Object.keys(params);
  keys = keys.sort();
  keys.forEach(function(key){
    paramsStr += key + '=' + params[key];
  });
  return crypto.createHmac('sha1', process.env.KEY ).update(paramsStr).digest('base64');
};