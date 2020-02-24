const http = require('http');

const server = http.createServer( (req, res) => {
    res.setHeader('Content-Type','text/html');
    res.write('<!DOCTYPE html> <html> <body> <p>I am normal</p> <p style="color:red;">My first response from node server</p></body> </html>');
    res.end();
});

server.listen(3000);