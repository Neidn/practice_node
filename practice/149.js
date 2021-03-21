const request = require('request');

request({
    url: 'https://google.com',
    method: 'get',
    qs: { q: '매곡동 맛집'},
}, (error, respose, body) => console.log(body));