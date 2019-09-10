var moment = require('moment');
module.exports = function (app, fs) {
    app.get('/stu', function (req, res) {
        // 获取json数据
        fs.readFile('./db.json', 'utf8', function (err, data) {
            console.log(data); // string
            if (err) res.send('Server Error')
            var stus = JSON.parse(data).stus; // json对象
            console.log(data.stus);
            res.render('index.html', {
                stus: stus
            })
        })
    })

// 添加页
    app.get('/stu/create', function (req, res) {
        res.render('post.html')
    })
// 数据处理
    app.post('/stu/create', function (req, res) {
        // 接收数据
        var stu = req.body;
        // 获取数据裤数据
        fs.readFile('./db.json', 'utf8', function (err, data) {
            if (err) console.log('server Error')

            var stus = JSON.parse(data).stus;
            var date = moment().format("YYYY-MM-D");
            stu.create_at = date;
            stu.id = stus[stus.length - 1].id + 1;
            stus.push(stu);
            // 转化为string，写入文件
            var stuStr = JSON.stringify({stus: stus})
            fs.writeFile('./db.json', stuStr, function (err) {
                if (err) res.send('Server Error');
                res.redirect('/stu');
            })
        })
    })
}