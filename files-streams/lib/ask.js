const readline = require('readline');

const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
 });

async function question(q) {
    return new Promise((resolve) => {
        rl.question(q, (answer) => resolve(answer))
    })  
} 

function close() {
    rl.close();
}

module.exports = {
    question,
    close
};