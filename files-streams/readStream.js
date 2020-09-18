const fs = require('fs');

const readStream = fs.createReadStream('./assets/lorum-ipsum.md', 'UTF-8');

let text = [];

console.log('type something...');

readStream.on('data', (data) => {
    console.log(`I read ${data.length-1} characters of text`);
    text.push(data);
});

readStream.once('data', (data) => {
    // console.log(data);
});

readStream.on('end', () => {
    console.log(`Read ${text.length} chunks of data`);
    console.log('file has finished reading');
});