/* 
    通过connect实现一个简单的网站，任务：
    - 托管静态文件
    - 处理错误以及损坏或者不存在的URL
    - 处理不同类型的请求
*/
var connect = require("connect");
// 创建服务器
var server = connect.createServer();
// 处理静态文件,将index.html和images目录放在website下
server.use(connect.static(__dirname+'/website'));
// 监听
server.listen(3000);

