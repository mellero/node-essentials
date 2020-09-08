const fs = require('fs');


// This will rename the file
fs.renameSync('./assets/colors.json', 'old-colors');


// This will move the file
fs.rename('./assets/note.md', './storage-files/note.md', (err) => {
    if (err) {
        throw err;
    }

    console.log('File renamed or moved');
});

// This will delete the file
fs.unlinkSync('./assets/alex.jpg');