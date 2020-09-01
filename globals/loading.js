module.exports = async function loading(waitTime, waitInterval=500) {
    const divisions = Math.floor(waitTime / waitInterval);
    
    let loadingBar = setLoadingBar(divisions);
    let currentTime = 0;
    
    console.log(`Setting a ${waitTime / 1000}s delay`);
    resetLine();
    process.stdout.write(`Loading: ${loadingBar}`);
    process.stdout.cursorTo(10);

    const interval = setInterval(function setIncTime() {
        process.stdout.write('.');
        currentTime += waitInterval;
    }, waitInterval);

    return await timeout(interval, waitTime);
}

async function timeout(interval, waitTime) {
    return new Promise((resolve) => {
        setTimeout(function timerFinished() {
            clearInterval(interval);
            resetLine();
            console.log('Finished.');
            resolve(true);
        }, waitTime);
    });
}

function resetLine() {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);    
}

function setLoadingBar(divisions) {
    let loadingBar = ']';

    for (let i = 0; i < divisions; i++) {
        loadingBar = ` ` + loadingBar;
    }
    return '[' + loadingBar;
}