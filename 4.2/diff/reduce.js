'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let prev = '';
let prevMarker = '';

rl.on('line', (line) => {
    let obj = line.split('\t');
    reduce(obj[0], obj[1]);
});

rl.on('close', () => {
    if (prev && prevMarker === 'A') {
        console.log(prev);
    }
});


function reduce(val, marker) {
    if (prev && prev !== val && prevMarker === 'A') {
        console.log(prev);
    }

    prev = val;
    prevMarker = marker;
}
