'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let prevKey = '';

rl.on('line', (line) => {
    let parsed = line.split('\t');
    reduce(parsed[0], parsed[1]);
});


function reduce(key, val) {
    if (prevKey === key) {
        return;
    }

    console.log(key);
    prevKey = key;
}
