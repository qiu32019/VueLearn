var message = "xxxxxx"
//产生闭包->内部函数引用外部函数的变量
function Modules(){
  var message = "hello world"
  function boySay(){
    console.log("boy say:"+message);
  }
  function girlSay(){
    console.log("girl say:"+message)
  }

  return {
    boy:boySay,
    girl:girlSay,
    anion:function scopeTest(){
      return function(){
        console.log("anion say:"+message)
      }
    }
  }
}