const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const dir = __dirname;

http.createServer((req, res) => {
    let filePath = path.join(dir, req.url === '/' ? 'index.html' : req.url);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}).listen(PORT, arg => {
    console.log(`Server started on http://localhost:${PORT}`);
});
