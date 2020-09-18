const fs = require('fs');

const writeStream = fs.createWriteStream('./assets/some.txt','UTF-8');

writeStream.write('hello');

// We can use .pipe with streams to pipe data from one to the other
process.stdin.pipe(writeStream);