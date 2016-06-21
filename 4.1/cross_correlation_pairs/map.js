'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
    map(null, line.split(' '));
});


function map(key, items) {
    items.forEach((first) => {
        items.forEach((second) => {
            if (first !== second) {
                console.log(`${first},${second}\t1`);
            }
        });
    });
}
