var http=require('http');
var url=require('url');
var fs=require('fs');

var server=http.createServer(function(req,res){
var parsed_url=url.parse(req.url,true);
var pname=parsed_url.pathname;
var fpath=pname.substring(1);

console.log(req.url);


fs.readFile(fpath,function(err,data){
if(!err)
{
res.writeHead(200,{'content-type':'text/html'});
res.write(data.toString());
res.end();
}
});
});

server.listen(9000,function(){
console.log("server-started at 9000");
});

   