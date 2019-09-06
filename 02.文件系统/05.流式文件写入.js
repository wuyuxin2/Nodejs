/*
*   同步、异步、简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出
*
* */

var fs = require("fs");

// 流式文件写入
// 创建一个可写流
/*
*   fs.createWriteStream(path[, option])
* */
var ws = fs.createWriteStream("hello4.txt");

// 可以通过监听流的open和close事件来监听流的打开和关闭
/*
*   on(事件字符串，回调函数)
*       - 可以为对象绑定一个事件
*   once(事件字符串，回调函数)
*       - 绑定一个一次性事件
*
* */
ws.once("open", function () {
    console.log("流打开了～～～");
})
ws.once("close", function () {
    console.log("流关闭了～～～");
})

ws.write("通过可写流写入文件的内容");
// 只要可写流没有关闭，就可以写入
ws.write("通过可写流写入文件的内容");
ws.write("通过可写流写入文件的内容");
ws.write("通过可写流写入文件的内容");

// 关闭了
// ws.close();
// 应该关另一端
ws.end();