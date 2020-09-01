const questions = [
    'What is your name?',
    'Best programming language?',
    'Terminal of choice?'
];

const answers = [];

const ask = (i = 0) => {
    process.stdout.write(`\n ${questions[i]} \n`);
    process.stdout.write(' > ');
}

process.stdin.on('data', data => { 
    answers.push(`${data.toString().trim()}`)

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', () => {
    const [name, lang, term] = answers;

    console.log(`Your name is: ${name},
Lang of choice: ${lang},
Terminal of choice: ${term}`);
});

ask();

