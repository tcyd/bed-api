module.exports.get = function *(next) {
  yield this.wrap('users');
};