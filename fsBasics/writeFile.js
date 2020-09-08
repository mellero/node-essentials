const fs = require('fs');

const markdown = `
# This is a new file.

We can write some text to the file. 
`;

fs.writeFile('./assets/note.md', markdown.trim(), (err) => {
    if (err) {
        throw err;
    }

    console.log('File saved');
});