var fs = require('fs')
var express = require('express');
var app = express()
// 响应多个静态资源
/*app.use('/public', function (req, res) {
    fs.readFile('./public'+req.url, 'utf8', function (err, data) {
        if(err){
            res.send('有问题'+err)
        }
        res.send(data)
    })
})*/

/*
*   express.static('目录名')
* */
app.use('/public', express.static('public'))
app.listen(8080, function () {
    console.log('Running...')
})