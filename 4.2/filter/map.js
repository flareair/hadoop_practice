'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    map(null, line.split('\t'));
});


function map(key, line) {
    if (line[1] === 'user10') {
        console.log(line.join('\t'));
    }
}
