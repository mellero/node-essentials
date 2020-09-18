const cp = require('child_process');

// Fork spawns a node process, and automatically links the two processes
// const questionApp = cp.fork('questions.js');


// Using spawn means you have to connect the two processes, in this case using pipe
const child = cp.spawn('node', ['./lib/questions.js']);

child.stdout.pipe(process.stdout);
process.stdin.pipe(child.stdin);

child.on('exit', function (code, signal) {
    console.log('child process exited with ' +
        `code ${code} and signal ${signal}`);

    process.exit(0);
});
