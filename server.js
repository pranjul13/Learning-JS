// Basic server.
// Core feature required is 'http'.

const http = require('http');   // This module handles the request and response.

// Arrow function implementation.
http.createServer((req, res) => {
    res.write("<h1>Hello</h1>");
    res.end();
}).listen(4500);    // Listening at port 4500.

// Normal implementation.
function dataControl(req, res) {
    res.write("<h2>Hello again.</h2>");
    res.end();
}
http.createServer1(dataControl).listen(4500);


hello = () => { // Arrow Function.
    return "Hello World!";
}