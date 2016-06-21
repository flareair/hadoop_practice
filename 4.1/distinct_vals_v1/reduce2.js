'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let temp = {};
let result = {};
rl.on('line', (line) => {
    let parsed = line.split('\t');
    prepare(parsed[0], parsed[1]);
});

rl.on('close', () => {
    for (let key in temp) {
        if (temp.hasOwnProperty(key)) {
            reduce(key, temp[key]);
        }
    }

    for (let key in result) {
        if (result.hasOwnProperty(key)) {
            console.log(`${key}\t${result[key]}`);
        }
    }
});

function prepare(key, val) {
    if (temp.hasOwnProperty(key) && temp[key].indexOf(val) == -1) {
        temp[key].push(val);
    } else if (!temp[key]){
        temp[key] = [val];
    }
}

function reduce(key, values) {
    values.forEach((val) => {
        if (result.hasOwnProperty(val)) {
            result[val] += 1;
        } else {
            result[val] = 1;
        }
    });
}