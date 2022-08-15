// Create an HTTP server using Node.js which handles requests on port 10000 or a free port
// beyond 10000. Modify the server in such a way that opening localhost:10000 will display “Hello
// world, This is my Node.js server” on browser.

var http = require('http');

http.createServer(function (req, res) {
    res.write('Hello World , This is my Node.js server');
    res.end();
  }).listen(10000);