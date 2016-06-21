'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let result = {};

rl.on('line', (line) => {
    let parsed = line.split('\t');
    combine(parsed[0], parsed[1]);
});

rl.on('close', () => {

    reduce();
});


function combine(address, time) {
    if (result[address]) {
        result[address].time += Number(time);
        result[address].count += 1;
    } else {
        result[address] = {};
        result[address].time = Number(time);
        result[address].count = 1;
    }

}

function reduce() {
    for (let address in result) {
        if (result.hasOwnProperty(address)) {
            let sum = (result[address].time / result[address].count).toFixed(0);
            console.log(`${address}\t${sum}`);
        }
    }
}