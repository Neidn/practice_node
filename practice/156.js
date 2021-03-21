const pug = require('pug');
const fs = require('fs');
const http = require('http');

const port = 5000;

http.createServer((req, res) => {
    fs.readFile('156_2.pug', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html'});
        const fn = pug.compile(data);
        res.end(fn());
    })
}).listen(port, () => {
    console.log('서버가 동작 중입니다, http://localhost:'+port)
})