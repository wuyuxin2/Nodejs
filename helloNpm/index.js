var math = require("math");

console.log(math.add.toString());


// node在使用模块名字来引入模块时，它会在当前目录的node_modules中寻找是否含有该模块，如果有则直接使用，如果没有，则再去上一层寻找
