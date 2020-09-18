const ask = require('./ask');
const { EventEmitter } = require('events');

const emitter = new EventEmitter();

async function collectAnswers(questions = [], cb = f => f) { 
    let answers = [];

    for (let q of questions) {
        let a = await ask.question(q + '\n > ');
        // emitter.emit('answer', a);
        answers.push(a);
    }

    // emitter.emit('complete', answers);
    ask.close();
    cb(answers);
}

module.exports = {
    collectAnswers,
    emitter
}
