var fs = require("fs");
// fs.open(path[, flags[, mode]], callback)
// 异步方法不可能有返回值，都是通过回调函数返回的
// 回调函数有两个参数：err 错误对象，没有错误则为null（错误优先）；fd
fs.open("hello2.txt", "w", function (err, fd) {
    console.log("回调函数中的代码后执行！")
    console.log(arguments);
    // 判断是否出错
    if(!err){
        console.log(fd);
        // 如果没有出错，则对文件进行写入操作
        // fs.write(fd, buffer[, offset[, length[, position]]], callback)
        fs.write(fd, "这是异步写入的内容", function (err) {
            if(!err){
                console.log("写入成功～～")
            }
            // 关闭文件
            fs.close(fd, function (err) {
                if(!err){
                    console.log("文件已关闭～～");
                }
            })

        })
    }else{
        console.log(err);
    }
});
console.log("异步执行效率高！");
