const loading = require('./loading');

process.stdout.write('How long would you like to load for? (s)\n');
process.stdout.write(' > ');

input();
async function input() {
    await process.stdin.on('data', async (data) => {
        let time = await data;
        let finished = await loading(time*1000);
        if (finished) {
            process.exit();
        }
    });
}
