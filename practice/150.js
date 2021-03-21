const request = require('request');
const iconv = require('iconv-lite');

request({
    url: 'https://google.com',
    method: 'get',
    qs: { q: '매곡동 맛집'},
    encoding: null,
}, (error, respose, body) => {
    const decodeResult = iconv.decode(body, 'euc-kr');
    console.log(decodeResult)
});