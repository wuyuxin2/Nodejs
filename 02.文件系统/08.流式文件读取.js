var fs = require("fs");

var rs = fs.createReadStream("hello4.txt");
var ws = fs.createWriteStream("writeOut2.txt");

/*rs.once("open", function () {
    console.log("可读流打开了～～");
});
rs.once("close", function (){
        console.log("可读流关闭了～～");
});
ws.once("open", function (){
    console.log("可写流打开了～～");
});
ws.once("close", function (){
    console.log("可写流关闭了～～");
});*/

// pipe()可以将可读流中的内容，直接输出到到可写流中
rs.pipe(ws);
