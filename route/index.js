
module.exports.get = function *(next) {
  yield this.wrap('this is the api server');
};

module.exports.deny = function *(next) {
  yield this.wrap(new EAPI.AuthFailedError());
};