var http=require('http');
var url=require('url');
var fs=require('fs');

var server=http.createServer(function(req,res){

var obj=url.parse(req.url,true);
var pname=obj.pathname;
var fpath=pname.substring(1);
var time=new Date();

var data="Request Received at "+time+"for"+fpath+"\n";
fs.appendFile('log.txt',data,function(err){
if(!err)
{
console.log("log generated");
}
});

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

   