使用说明：这个项目是我从 github上的‘iflux-validator-demo’
这个项目原封不动的复制过来的，没有商业目的，这是个人复制过来学习使用，
后期可能会删除，如果你在github上发现我的项目，请还是查看iflux原著的
‘iflux-validator-demo’的这个项目吧，谢谢。（这样做的目的是为了方便自己在
异地测试方便提交代码到github上备份测试代码，希望谅解，sorry）


iflux-validator

思路：

不在校验dom，而是校验我们的领域对象（domain object）。view只是显示了我们的校验结果而已。

目标：

1. 校验全部配置的数据
2. 校验配置数据中的部分数据
4. 异步校验使用正常业务逻辑流转
3. 集成iflux的store


使用方式：

```javascript

 var Store = require('iflux/store');
 var Validator = require(iflux/validator);

 /**
  * store
  */
 var store = Store({
  form: {
    username: '',
    password: '',
    email: ''
  },
  fieldError: {
    form: {
      username: ['', '']
    }
  }
 });


 /**
  * validator
  */
 var validator = Validator(store, {
   'form.username': {
     required: true,
      minLength: 4,
      message: {
        required: 'username is required',
        minLength: 'username length great than 4'

      }
   },

   'form.password': {
      required: true,
      message: {
        required: 'password is required'
      }
   },

   'form.email': {

   }
 }, {oneError: true});


 /**
  * 自定义校验规则，在isValid调用之前定义
  */
 validator.rule('lessThen3', function(val) {
  return val < 3;
 });



 //校验全部
 validator.isValid(); //true || false
 //校验单个字段
 validator.isValid('form.username')

 //错误
 validator.fieldErrors();

```


npm start
http://localhost:3000/bundle

