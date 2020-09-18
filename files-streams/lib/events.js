const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('someEvent', (message, user) => {
    console.log(`${user}: ${message}`);
});

emitter.emit('someEvent', 'I have sent a message', 'Matt');