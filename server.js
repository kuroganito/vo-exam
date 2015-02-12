var http = require("http"),
	fs   = require("fs");
	
var server = http.createServer(function(req,res){
	if(req.url == "/")
		req.url = "/index.html"
	fs.readFile("."+ req.url,function(error,file){
		if(!error){
			res.end(file);
		}

	});
});
server.on("request",function(req,res){
		console.log(req.url);
	});

server.listen( process.env.PORT || 3000 ,function(){
	console.log("Servidor iniciado");
})