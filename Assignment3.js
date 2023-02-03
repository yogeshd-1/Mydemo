var http=require('http')
var server=http.createServer(function(req,res){
res.writeHead(200,{'content-type':'text/html'});
res.write("<h1>Welcome to Node JS!!!!!!!!!!</h1>");
res.end();
});

server.listen(9000,function(){
console.log("server-started at 9000");
});