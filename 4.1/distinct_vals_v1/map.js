'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
    let parsed = line.split('\t');
    map(parsed[0], parsed[1].split(','));
});


function map(value, groups) {
    groups.forEach((group) => {
        console.log(`${value},${group}\t1`);
    });
}
