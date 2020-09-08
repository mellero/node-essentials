const fs = require('fs');

const dirname = './storage-files';
const flag = process.argv[2];


// Force option, delete all files inside the directory
if (flag === 'true') {
    fs.readdirSync(dirname).forEach((f) => {
        fs.unlinkSync(`${dirname}/${f}`);
    });
}

fs.rmdir(dirname, (err) => {
    if (err) {
        throw err;
    }

    console.log('Directory removed');
})