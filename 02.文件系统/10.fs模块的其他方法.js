var fs = require("fs");
// 检查文件是否存在
var exist = fs.existsSync("hello2.txt");
console.log(exist);
// 获取文件的状态 - 返回一个对象
fs.stat("hello2.txt", function (err, stats) {
    console.log(stats.size); // 文件的大小
});
// unlink 删除文件
// fs.unlinkSync("hello.txt");
/*
*   readdir - 读取一个目录的结构
* */
fs.readdir(".",function (err, files) {
    if (!err){
        console.log(files);
    }
});
/*
*      fs.rename
* */
/*fs.rename("writeout.txt", "writeout1.txt", function (err) {
    if(!err){
        console.log("修改成功！")
    }
});*/
/*
*   fs.watchFile(filename[, options], listener)
*       - options 配置选项
*       - 当文件发生变化时，回调函数会执行
*           - 参数：
*               curr 当前文件的状态
*               prev 修改前文件的状态
*                   - 都是stats对象
*       - 每次检查有间隔时间
* */
fs.watchFile("hello2.txt", {interval:1000},function (curr, prev) {
    console.log("监听到文件发生变化了～～");
    console.log("修改前：" + prev.size);
    console.log("修改后：" + curr.size);
});