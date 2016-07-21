var Immutable = require('immutable');


/**
 * 封装form类型
 */
var Form = Immutable.Record({
  username: '',
  password: '',
  confirm: '',
  email: '',
  qq: '',
  list1:[{name:'yicj'}],
  fieldErrors: Immutable.Map({})
});


module.exports = Form;
