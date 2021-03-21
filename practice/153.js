const cheerio = require('cheerio');
const crawler = require('./152');
const fs = require('fs');

const parse = (decodeResult) => {

    const $ = cheerio.load(decodeResult);
    const titles = $('div').find('a');

    titles.each((index, element) => {
        const title = $(element).text();
        console.log(title);
        fs.appendFileSync('./titles.txt', `${title}\n`);
    })
};

crawler.crawl(parse)({q: '매곡동'});