'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
    let parsed = line.split(',');
    map(parsed[0], parsed[1]);
});


function map(key, val) {
    console.log(`1\t${val}`);
}
