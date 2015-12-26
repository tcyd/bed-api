module.exports = function *(next){
  this.wrap = function (data){
    return function *(next){
      if(data instanceof EAPI){
        this.body = {
          err_code: data.err_code,
          err_msg: data.err_msg
        };
      }else{
        this.body = {
          err_code: 0,
          err_msg: '',
          data: data
        };
      }
    };
  };
  yield *next;
};
