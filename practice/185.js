const port = 3000;

const app = require('express')();
const server = require('http').createServer(app);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/185.html`);
});

const io = require('socket.io')(server);

io.on('connection', (client) => {
    console.log('Client connection');

    // 이벤트 연결 및 전달
    client.on('clientmsg', (data) => {
        console.log('This is client Data:', data);
        client.emit('msg', data);
    });

    // 이벤트 연결 및 전달
    client.on('status', (data) => {
        console.log('Status event(Serrver)');
        setInterval(() => {
            client.emit('msg2', 'Hello socket.io');
        }, 3000);
    });
});

server.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});