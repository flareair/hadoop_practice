'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let lineCount = 0;
let result = [];

rl.on('line', (line) => {
    map(lineCount++, line);
});

rl.on('close', () => {
    for (let resKey in result) {
        if (result.hasOwnProperty(resKey)) {
            console.log(`${resKey}\t${result[resKey]}`);
        }
    }
});


function map(key, line) {

    line.split(' ').filter(Boolean).forEach((word) => {
        if (result[word]) {
            result[word] += 1;
        } else {
            result[word] = 1;
        }
    });

}