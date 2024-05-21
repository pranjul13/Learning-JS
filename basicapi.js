const http = requrie('http');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application\json' });
    res.write(JSON.stringify({ name: 'Hecker', email: 'hecker@invincibleocean.com' }));
    res.end();
}).listen(8080);