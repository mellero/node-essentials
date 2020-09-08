const fs = require('fs');
const colors = require('./assets/colors.json');

colors.colorList.forEach((c) => {
    fs.appendFile(
        './storage-files/colors.md', 
        `${c.color}: ${c.hex} \n`,
        (err) => { 
            if (err) { 
                throw(err) 
            }
        });
});