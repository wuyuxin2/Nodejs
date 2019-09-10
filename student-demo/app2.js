//1.引入express模块
var express = require('express')
var fs = require('fs')
//2.创建app对象
var app = express()
//3.配置
//学生列表
app.get('/stu', function(req, res, next){
    fs.readFile('/adsfaadsfdsf.sdf', function(err, data){
        // if (err) res.end('404 Not Found')
        // 上述写法有瑕疵，因为后期要改错误  需要改多次
        // 解决：利用路由中间件过滤 过滤成错误中间件
        if (err) next(err)  //next不加参数则交给下面第一个匹配成功的
                            //next加参数则交个下面第一个有err参数的
        console.log(1)
        res.end('stu list')
    })
})
//学生添加
app.get('/stu/post', function(req, res, next){
    fs.readFile('/11.sdf', function(err, data){
        if (err) res.end('404 Not Found')
        console.log(1)

        res.end('stu post')
    })
})
//处理404错误中间
app.use(function(req, res){
    //end是nodejs内置的
    //send是express内置的
    //区别：send自动识别编码
    res.send('1对不起，你迷路了~~~~') //这边是小demo 后期你可以render好看的404页面
})
//匹配全局处理中间件
//统一处理项目 500 错误
//脚下留心：参数可以不加，但是都写顺序不能改变
app.use(function(err, req, res, next){
    res.send('网络异常')
})
//5.启动服务
app.listen(8080)
