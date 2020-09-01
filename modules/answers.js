const ask = require('./ask');


module.exports = async function collectAnswers(questions = [], cb = f => f) { 
    let answers = [];

    for (let q of questions) {
        answers.push(await ask.question(q + '\n > '));
    }

    ask.close();

    cb(answers);
}