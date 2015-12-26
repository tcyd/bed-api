var errors = {
  ParamsError: {
    name: 'ParamsError',
    code: 1,
    msg: '请求参数错误'
  },
  NotFoundError: {
    name: 'NotFoundError',
    code: 2,
    msg: '所请求的资源并不存在'
  },
  AuthFailedError: {
    name: 'AuthFailedError',
    code: 3,
    msg: '认证失败'
  },
  UnauthorizedError: {
    name: 'UnauthorizedError',
    code: 4,
    msg: '需要认证以访问指定的资源'
  },
  CaptchaFailedError: {
    name: 'CaptchaFailedError',
    code: 5,
    msg: '验证码无效'
  },
  DuplicatedError: {
    name: 'DuplicatedError',
    code: 6,
    msg: '该资源已存在'
  },
  SignatureError: {
    name: 'SignatureError',
    code: 7,
    msg: 'API签名错误'
  },
  InternalError: {
    name: 'InternalError',
    code: -1,
    msg: '窝并不知道发生了什么错误'
  }
};

function Eapi(){};
var keys = Object.keys(errors);
keys.forEach(function(key){
  var error = errors[key];
  function Error(msg){
    this.err_name = error.name;
    this.err_code = error.code;
    this.err_msg = msg || error.msg;
  };
  Error.prototype = new Eapi();
  Eapi[key] = Error;
});

module.exports = Eapi;