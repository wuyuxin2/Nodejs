var express = require('express');
var app = express();
app.get('/', function (req,res) {
    var formHtml = `
        <form action="/test/a/b" method="post">
            <input type="text" name="uname">
            <input type="text" name="age">
            <input type="submit">
        </form>
    `
    res.send(formHtml)
})

/*
*   use
*       1.匹配任何类型
*       2.use非完全匹配
*
* */
app.use('/test', function (req, res) {
    res.send('this is /test');
})
app.listen(8080,function () {
    console.log('Running... http://localhost:8080')
})