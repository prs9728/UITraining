/* to work with http protocol, we'll use http module.*/

var http = require('http');

//responsiveness of Node is vvv high!
//everytime you need to restart server when done code change!
//trying to handle incoming requests, saying 
//if any request cmng in, I wld like to process the re
//by setting up header as 200, which is +ve response.
//and along with particular request sending msg
//all html tag can be used here.
//WriteHeader holds the code.; it is Optional.
//res.end will conclude the process by sending the response to the request. The client will be waiting till you send the response.; it is MANDATORY. otherwise your process doesn't end and will not send any response for the request.
//send html file can be used to use html code apart from res.end
//res.end only takes html, nothg else!!!!
//200-+ve response; 300- cached
//400-error; 500-internal server error
var requestListner = function(req, res){
    res.writeHead(200);
    res.end("<h1>Hello World!</h1>");
}

/* we need to create a server. ask server to listen on a port.*/

//creating server
var server = http.createServer(requestListner);

//listen on port no. 3000
//asking server to run on port 3000
server.listen("3000");
