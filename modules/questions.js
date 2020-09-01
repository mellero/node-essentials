const { collectAnswers, emitter } = require('./answers');

const questions = [
    'What is your name?',
    'What is your favourite programming language?',
    'Do you enjoy node?'
];

async function getAnswers() {
    await collectAnswers(questions, (answers) => {
        console.log('These are your answers: ', answers);
        console.log('Exiting.');
        process.exit();
    });
}

// emitter.on('answer', (answer) => console.log(answer));
// emitter.on('complete', (answers) => console.log(answers));
getAnswers();


