// 引入模块
var express = require('express');
// 创建服务器
var app = express();
// 配置
app.engine('html', require('express-art-template'))
// 路由
app.get('/', function (req, res) {
    // end() 响应字符串
    // send()
    // render()
    // res.send('<a>你好，一颗批热水。hello express</a>')
    res.render('test.html', {
        username: 'wuyuxin',
        age: 5,
        orders:[
            {id:1, title:'标题1',price:30},
            {id:2, title:'标题2',price:20},
            {id:3, title:'标题3',price:39}
        ]
    });
})
// 启动服务
app.listen(8080, function () {
    console.log('http://localhost:8080')
})