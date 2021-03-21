const cheerio = require('cheerio');
const crawler = require('./152');

const parse = (decodeResult) => {
    const $ = cheerio.load(decodeResult);
    const titles = $('div').find('a');


    for (let i = 0; i < titles.length; i += 1) {
        const title = $(titles[i]).text();
        console.log(title);
    }
};

crawler.crawl(parse)({q: '매곡동 맛집'});