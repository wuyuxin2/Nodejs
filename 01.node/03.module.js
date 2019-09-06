/* 
    引入其他的模块
        - requiire("")
    使用require()引入模块后，该函数会返回一个对象，这个对象代表的是引入的模块

    我们使用模块标识找到模块
        - 核心模块
            - node引擎提供的
            - 模块的名字
        - 文件模块
            - 用户自己创建的模块
            - 文件的路径
*/
var md = require("./02.module.js");
console.log(md);
var math = require("./math.js");
console.log(math.add(123, 456));
var fs = require("fs");
console.log(fs);