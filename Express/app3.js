// 引入模块
var express = require('express');
// 创建服务器
var app = express();
// 路由
app.get('/', function (req, res) {
    var formHtml = `
        <form action="/test" method="post">
            <input type="text" name="uname">
            <input type="text" name="age">
            <input type="submit">
        </form>
    `
    res.send(formHtml)
})

app.get('/test', function (req, res) {
    res.send('this is get submit')
})
app.post('/test', function (req, res) {
    res.send('this is post submit')
})
// 启动服务
app.listen(8080, function () {
    console.log('http://localhost:8080')
})