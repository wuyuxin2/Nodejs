var fs = require('fs');
var dbPath = '/db.json';

/*
*   获取学生列表
* */
exports.find = function (callback) {
    fs.readFile(dbPath, function (err, data) {
        if (err) {
            return callback(err);
        }
        callback(null, JSON.parse(data.toString()).stus)
    })
}

/*
*   根据id获取数据
* */
exports.findById = function (id, callback) {
    fs.readFile(doPath, function (err) {
        if (err) {
            return callback(err);
        }
        // 获取旧数据
        var stus = JSON.parse(data.toString()).stus;
        // 通过js的find方法获取指定id对象
        var stu = stus.find(function (item) {
            return item.id == id;
        })
        callback(null, stu);
    })
}

/*
*   添加保存学生
* */
exports.add = function (stu, callback) {
    fs.readFile(dbPath, function (err, data) {
        if (err) {
            return callback(err)
        }
        //1.获取旧数据
        var stus = JSON.parse(data.toString()).stus
        //2.组装数据（将用户提交的stu对象压入数组中）
        var d = new Date();
        var date = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + ' ' +
            d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds();
        stu.id = stus[stus.length - 1].id + 1 // 添加 id ，唯一不重复
        stu.create_at = date
        stus.push(stu)
        //3.入库（把字符串保存到文件中）
        var fileData = JSON.stringify({stus: stus})
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                // 错误就是把错误对象传递给它
                return callback(err)
            }
            // 成功就没错，所以错误对象是 null
            callback(null)
        })
    })
}

/**
 * 更新学生
 */
exports.updateById = function (stu, callback) {
    fs.readFile(dbPath, function (err, data) {
        if (err) {
            return callback(err)
        }
        //1.获取旧数据
        var stus = JSON.parse(data.toString()).stus
        //2.更新旧数据
        var updateId = stus.findIndex(function (item) {
            return item.id == stu.id
        })
        var d = new Date();
        var date = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + ' ' +
            d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds();
        stu.create_at = date //提交的数据增加时间属性
        stus[updateId] = stu //获取修改数据下标后，进行修改
        //3.入库
        var fileData = JSON.stringify({stus: stus})
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                // 错误就是把错误对象传递给它
                return callback(err)
            }
            // 成功就没错，所以错误对象是 null
            callback(null)
        })
    })
}

/**
 * 删除学生
 */
exports.deleteById = function (id, callback) {
    fs.readFile(dbPath, function (err, data) {
        if (err) {
            return callback(err)
        }
        //1.获取旧数据
        var stus = JSON.parse(data.toString()).stus
        //2.删除数据
        var deleteId = stus.findIndex(function (item) {
            //获取删除数据数组下标
            return item.id == id
        })
        stus.splice(deleteId, 1) //根据下标删除
        //3.入库（更新后的旧数据重新保存到文件中）
        var fileData = JSON.stringify({stus: stus })
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                // 错误就是把错误对象传递给它
                return callback(err)
            }
            // 成功就没错，所以错误对象是 null
            callback(null)
        })
    })
}


