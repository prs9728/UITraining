/* to work with http protocol, we'll use http module.*/

var http = require('http');
const { send } = require('process');

var requestListner = function(req, res){
    if(req.url=='/register'){
        res.writeHead(200);
        res.end("<h1>Welcome to PegaSystems</h1><div>PLEASE wait!</div>");
    }
    else{
        res.writeHead(200);
        res.end("<h1>Hello World!</h1>");
    }
}

var server = http.createServer(requestListner);

server.listen("3000");
