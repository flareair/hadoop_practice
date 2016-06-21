'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    let obj = line.split('\t');
    reduce(obj[0], obj[1]);
});


let prev = '';

function reduce(val, marker) {
    if (prev && prev === val) {
        return;
    } else {
        prev = val;
        console.log(val);
    }
}
