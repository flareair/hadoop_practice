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
    if (line[2]) {
        console.log(line[2]);
    }
}
