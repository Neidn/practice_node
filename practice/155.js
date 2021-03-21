const ejs = require('ejs');
const fs = require('fs');
const http = require('http');

const port = 5000;

http.createServer((req, res) => {
    fs.readFile('155_2.ejs', 'utf-8', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(ejs.render(data, {
            table_name: 'Multiplication table 19 X ?',
            number: '19',
        }))
    })
}).listen(port, () => {
    console.log('서버가 동작 중 입니다, http://localhost:' + port)
})