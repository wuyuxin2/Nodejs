/*
*   文件系统（file system)
*       - 通过node操作系统中的文件
*       - 使用文件系统，需要先引入fs模块，直接引入
*       - 分异步和同步
*
*   文件写入
*       1. 打开文件
*           02Fs.openSync(path[, flags, mode])
*               - path 要打开文件的路径
*               - flags 打开文件要做的操作的类型
*               - r 只读的；w 可写的
*               - mode 设置文件的操作权限，一般不传
*               - 该方法会返回一个文件的描述符作为结果，我们可以通过该描述符来对文件进行各种操作
*       2. 向文件中写入内容
*           02Fs.writeSync(fd, buffer[, offset[, length[, position]]])
*               - fd 文件的描述符，需要传递写入文件的描述符
*               - string 要写入的内容
*               - position 写入的起始位置
*       3. 保存并关闭文件
*           02Fs.closeSync(fd)
* */

var fs = require("02.文件系统/02.fs同步");

var fd = fs.openSync("hello.txt", "w");
console.log(fd);

fs.writeSync(fd, "今天天气真不错～～～",20);

// 关闭文件
fs.closeSync(fd);

