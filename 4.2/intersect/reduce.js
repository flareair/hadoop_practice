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
let prevMarker = '';
let prevOutput = '';

function reduce(val, marker) {
    // console.log(val);
    if (prev && prev === val && prevMarker !== marker && prevOutput !== val) {
        prevOutput = val;
        console.log(val);
    } else {
        prev = val;
        prevMarker = marker;
    }
}
