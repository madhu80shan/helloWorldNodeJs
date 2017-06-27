/*var http = require('http');
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');*/
console.log("Hi Welcome to Node.js  Hello World");
var d = new Date();
console.log("Current Date is: " + ("0" + (d.getDate() + 1)).slice(-2) + "/"
		+ ("0" + (d.getMonth() + 1)).slice(-2) + "/" + d.getFullYear());
console.log("Current Time is: " + d.getHours() + ":" + d.getMinutes() + ":"
		+ d.getSeconds());
