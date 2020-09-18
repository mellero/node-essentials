const fs = require('fs');

const dirname = 'storage-files';

if (fs.existsSync(dirname)) {
    return console.log(`Directory '${dirname}' already exists`);
}

fs.mkdir(dirname, (err) => {
    if (err) {
        throw err;
    }

    console.log('Directory created');
})