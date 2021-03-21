const express = require('express');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    const result = [];
    const multipleNumber = 9;
    for (let i = 1; i < 5; i++) {
        result.push({
            number: `${multipleNumber} X ${i}`,
            multiple: multipleNumber * i
        });
    }
    res.send(result);
});

app.get('/error', (req, res) => {
    res.status(404).send('404 ERROR');
});

app.listen(port, () => {
    console.log('Server is running http://localhost:' + port);
});
