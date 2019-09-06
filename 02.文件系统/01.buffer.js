/*
*   Buffer(缓冲区)
*       - Buffer的结构和数组很像，操作的方法也和数组类似
*       - 数组中不能存储二进制文件，Buffer就是专门用来存储二进制数据
*       - 使用Buffer不需要引入模块
*       - 在Buffer中存储的都是二进制数据，但是显示都是16进制
*       - 8bit = 1byte（字节）
*       - 1024byte = 1kb
*       - 1024kb = 1mb
*       - 1024mb = 1gb
*       - 1024gb = 1tb
*       - 计算机中的一个0或1，成为1位（bit）
*       - buffer中的一个元素，占用内存的一个字节
*       - buffer的大小一旦确定，无法修改，Buffer实际是对底层内存的直接操作
*
*
* */

var str = "你好啊 Buffer";
var buf = Buffer.from(str);
console.log(buf.length); // 占用内存大小
console.log(str.length); // 字符串长度


// buffer的构建函数已经不推荐使用了
// var buf2 = new Buffer(10); // 10个字节的buffer
var buf2 = Buffer.alloc(10);
// 通过索引，来操作buf中的元素
buf2[2] = 88;
buf2[10] = 15; // 无效
buf2[3] = 256; // 进位，只取后八位
// 只要数字在控制台或者页面中输出，一定是10进制
console.log(buf2);
console.log(buf2[2].toString(16));


// allocUnsafe创建的buf，可能含有敏感数据，alloc会清空数据
var buf3 = Buffer.allocUnsafe(10);
console.log(buf3);


