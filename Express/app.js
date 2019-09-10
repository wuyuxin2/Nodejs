// 引入模块
var express = require('express');
// 创建服务器
var app = express();
// 路由
app.get('/', function (req, res) {
    // end() 响应字符串
    // send()
    // render()
    res.send('<a>你好，一颗批热水。hello express</a>')
})
// 启动服务
app.listen(8080, function () {
    console.log('http://localhost:8080')
})