var express = require('express')
var app = express()
app.get('/stu/:name/:age', function (req, res) {
    console.log(req.params);
    res.send('匹配成功，快去看看控制台有没有获取数据...')
})
app.listen(8080, function () {
    console.log('Running...http://localhost:8080')
})