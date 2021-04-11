// socket.io
const app = require('express')();
const server = require('http').createServer(app);
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/183.html`);
});

const io = require('socket.io')(server);

io.on('connection', (client) => {
    console.log('Client connection');
    client.on('disconnect', () => {
        console.log('CLient disconnection');
    });
});

server.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`)
});