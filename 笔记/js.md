### Js 数据类型
- 基本数据类型
  1. string    任意字符串
  2. number    任意数值
  3. boolean   true | false
  4. undefined 唯一存在,声明但未赋值
  5. null      唯一存在,声明且赋值为null
- 引用对象类型
  1. object
  2. array  有序的带数值小标的
  3. function 存储代码的,可运行的

### 判断
- typeOf 返回对应数据类型的字符串描述
- instanceOf 判断对象返回true,false
- ===    值与类型是否相当返回true,false。undefined,null判断时比较有奇效,这2个都是唯一的

### .与[]的调用方式区别
- .用于找属性
  1. exam.content-type = 'text/json'; -> 由于content-type有'-'，为非法，赋值失败，编译不过
  2. 变量名不确定时
- [] 通用的，没有限制，但是使用不方便，写框架代码可以考虑

### 函数
- 什么是函数
  1. 实现特定功能，封装N条语句的容器
  2. 只有函数可执行
- 为什么使用函数
  1. 提高代码的复用
  2. 便于阅读交流
- 如何定义函数
  1. 声明 function a(){}
  2. 表达式 var a = function(){}  
- 函数执行
  1. test()
  2. obj.test()
  3. new test()
  4. test.call|apply(otherObject) 可以让一个函数成为一个实例对象的方法来使用，比如函数test就被对象otherObject来执行了
  
### 回调函数
- 定时器
    1. 超时定时器 setTimeout(function(){...}, 1000)
    2. 循环定时器 setInterval(function(){...})
- dom 回调函数 如：给一个button绑定一个事件，待事件触发则调用函数
- Ajax请求回调函数
- 生命周期回调函数

### IIFE Immediately-Invoke Function Expression
- 匿名函数
``` javascript
   (function(){
     console.log(1);
   })()

   (function(){
     var a = 1;
     function test(){
       console.log(a++)
     }
      window.$ = function(){
        return {
          test:test
        }
      }
   })()

   $().test();//输出
```
> 作用: 
>  1.隐藏事件
>  2.防止变量污染外部空间

### this关键字
- test()  this->window 
- p.test() this->p
- new test() this->新建的对象实例(隐式对象)
- test.call(obj) this->obj

### 分号的使用
- 在() 左侧加";"
- 在[] 左侧加";"