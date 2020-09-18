const fs = require('fs');

const text = fs.readFileSync('./assets/Readme.md', 'utf-8');
fs.readFile('./assets/alex.jpg', (err, img) => {
    if (err) {
        console.err(`Error: ${err}`);
        process.exit();
    }

    console.log(img);
});


console.log(text);
