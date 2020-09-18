const cp = require('child_process');

cp.exec('ls', (err, data) => {
    if (err) return console.log(err);
    console.log(data)
});

// You can use exec to run another node process as well:
cp.exec('node readStream', (err, data) => {
    if (err) return console.log(err);
    console.log(data);
});