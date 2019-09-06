/*
*   1.同步文件读取
*   2.异步文件读取
*   3.简单文件读取
*   4.流式文件读取
* */

var fs = require("fs");

fs.readFile("hello3.txt", function (err, data) {
    if (!err) {
        // 文本、音频、图片，返回Buffer
        console.log(data);
        // 将data写出去
        fs.writeFile("writeOut.txt", data, function (err) {
            if (!err) {
                console.log("文件写入成功！");
            }
        })
    }
});