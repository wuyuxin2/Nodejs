var express = require('express');
// var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
app.engine('html', require('express-art-template'))
app.use('/public', express.static('public'))
app.use(bodyParser.urlencoded({extend: false}));

// 路由
/*var stuRouter = require('./routes/stu1');
stuRouter(app, fs)*/
// express 路由
var stuRouter = require('./routes/stu');
app.use('/stu', stuRouter);

app.listen(8080, function () {
    console.log('启动成功...http://localhost:8080');
})