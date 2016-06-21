'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let prev = '';
let prevMarker = '';
let notNext = false;

rl.on('line', (line) => {
    let obj = line.split('\t');
    reduce(obj[0], obj[1]);
});

rl.on('close', () => {
    if (!notNext && prev) {
        console.log(prev);
    }
});


function reduce(val, marker) {
    if (prev && prev !== val && !notNext) {
        console.log(prev);
    }

    notNext = false;

    if (prev && prev === val && prevMarker !== marker) {
        notNext = true;
    }

    prev = val;
    prevMarker = marker;
}
