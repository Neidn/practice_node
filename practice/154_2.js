const ejs = require('ejs');
const fs = require('fs');
const http = require('http');

const port = 5000;

http.createServer((req, res) => {
    fs.readFile('154.ejs', 'utf-8', (error, data) => {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(ejs.render(data));
    })
}).listen(port, () => {
    console.log('서버가 동작 중입니다, http://localhost:'+port)
});