var fs = require("fs");

var rs = fs.createReadStream("hello4.txt");
var ws = fs.createWriteStream("writeOut2.txt");

rs.once("open", function () {
    console.log("可读流打开了～～");
});
rs.once("close", function (){
        console.log("可读流关闭了～～");
        // 数据读取完毕，关闭可写流
        ws.end();
});
ws.once("open", function (){
    console.log("可写流打开了～～");
});
ws.once("close", function (){
    console.log("可写流关闭了～～");
});


// 文件过大时，一段一段的读取 65536
rs.on("data", function (data) {
    console.log(data.length);
    ws.write(data);
})
