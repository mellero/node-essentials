const collectAnswers = require('./answers');

const questions = [
    'What is your name?',
    'What is your favourite programming language?',
    'Do you enjoy node?'
];

collectAnswers(questions, (answers) => {
    console.log('These are your answers: ', answers);
    console.log('Exiting.');
    process.exit();
});

