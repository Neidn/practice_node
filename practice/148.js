const request = require('request');

request({
    url: 'https://google.com',
    method: 'get',
}, (error, respose, body) => console.log(body));