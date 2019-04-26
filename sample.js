/*
    创建一个connect应用，创建两条路由：
    第一条很快返回，另一条1妙后返回
*/

var connect = require('connect'), time = require('./request-time');
/* 创建服务 */
var server  = connect.createServer();
// 记录请求情况
server.use(connect.logger('dev'));
// 实现时间组件
server.use(time({time : 500}));
//快速响应
server.use(function(req,res,next){
    if('/a' == req.url){
        res.writeHead(200);
        res.end('fast!');
    }else{
        next();
    }
})
//慢速响应
server.use(function(req,res,next){
    if('/b' == req.url){
        setTimeout(function(){
            res.writeHead(200);
            res.end('slow!');
        },1000)
    }else{
        next();
    }
})

// 服务器监听
server.listen(3000);
