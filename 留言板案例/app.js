// 1. 引入http模块
var http = require('http');
var fs = require('fs');
var url = require('url');

// 创建数组对象
var msgs = [
    {name:'张三', content:'你好我是张三', create_at:'2017-11-14 10:30:32'},
    {name:'张三', content:'你好我是张三', create_at:'2017-11-14 10:30:32'},
    {name:'张三', content:'你好我是张三', create_at:'2017-11-14 10:30:32'}
]

// 2. 创建web服务器
var server = http.createServer();
// 3. 监听请求
server.on('request', function (req, res) {
    // 获取当前请求地址
    var currentUrl = req.url;

    if (currentUrl == '/') {
        /* 请求/加载留言板 */
        fs.readFile('./view/index.html', 'utf8', function (err, data) {
            if (err) {
                res.end('404 Not Found');
            }
            // 遍历数组拼接数据
            var html = '';
            msgs.forEach(function (item) {
                //  ES6新语法
                html += `
                    <li class="list-group-item">${item.name}说：${item.content}<span class="pull-right">${item.create_at}</span></li>
                `
            })

            var data = data.replace('~~~', html);
            res.setHeader('Content-Type', 'text/html;charset=utf-8');
            res.write(data);
            res.end();
        })
    } else if (currentUrl == '/add') {
        /* /add */
        fs.readFile('./view/add.html', 'utf8', function (err, data) {
            if (err) {
                res.end('404 Not Found');
            }
            res.setHeader('Content-Type', 'text/html;charset=utf-8');
            res.write(data);
            res.end();
        })
    } else if (currentUrl.indexOf('/public') === 0) {
        /* 检测静态资源并响应 */
        fs.readFile('./' + currentUrl, 'utf8', function (err, data) {
            if (err) {
                res.end('404 Not Found');
            }
            // res.setHeader('Content-Type', 'text/html;charset=utf-8');
            res.write(data);
            res.end();
        })
    } else if(currentUrl.indexOf('/doadd') == 0){
        // 表单提交数据处理
        if(req.method == 'POST'){

        }else{
            // 1.接收数据
            var paramObj = url.parse(req.url, true).query;
            console.log(paramObj);
            // 2.入库
            var d = new Date();
            var date = d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
            var msg = {name: paramObj.name, content: paramObj.content, create_at: date};
            console.log(date);
            msgs.push(msg);
            // 3.跳转
            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();

        }
    }else {
        /* 404 */
        fs.readFile('./view/404.html', 'utf8', function (err, data) {
            if (err) {
                res.end('404 Not Found');
            }
            res.setHeader('Content-Type', 'text/html;charset=utf-8');
            res.write(data);
            res.end();
        })
    }
})
// 启动服务
server.listen(8080, function () {
    console.log('请求成功，访问：http://localhost:8080');
})