var http=require('http');
var u=require('url');
var server=http.createServer(function(req,res){
var obj=u.parse(req.url,true);
var nm=obj.query.name;
res.writeHead(200,{'content-type':'text/html'});
res.write("<h1>Welcome</h1>"+nm);
res.end();
});

server.listen(9000,function(){
console.log("server-started at 9000");
});