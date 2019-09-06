a = 10; // 全局变量
var b = 10;

/*
*   在node中有一个全局对象 global，它的作用和网页中window类似
*       在全局中创建的变量都会作为 global 的属性保存
*       在全局中创建的函数都会作为 global 的方法保存
*
*   当node在执行模块中的代码时，它会首先在代码的最顶部，添加如下代码
*       function (exports, require, module, __filename, __dirname){
*   在代码的最底部，添加如下代码：
*       }
*
*   实际上模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递进了5个实参
*       exports
*           - 该对象用来将变量或函数暴露到外部
*
*       require
*           - 函数，用来引入外部的模块
*
*       module
*           - module代表的是当前模块本身
*           - exports就是module的属性
*           - 既可以使用 exports 导出，也可以使用 module.exports导出
*
*       __filename
*           - 当前模块完整路径/Users/mac/Desktop/Vue笔记/Nodejs/01.node/04.module.js
*
*       __dirname
*           - 当前文件所在文件夹的路径/Users/mac/Desktop/Vue笔记/Nodejs/01.node
* */

console.log(global.a);
console.log(global.b);

/*
*   arguments.callee
*       - 保存的是当前执行的函数对象
* */
console.log(arguments.callee + "");
console.log(arguments.length);
console.log(__dirname);