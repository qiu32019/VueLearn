;(function(window){
  var message = "hello world"
  function boySay(){
    console.log("boy say:"+message)
  }
  function girlSay(){
    console.log("girl say:"+message)
  }

  window.Modules = {
    boy:boySay,
    girl:girlSay
  }
})(window)