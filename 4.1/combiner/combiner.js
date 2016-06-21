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
    combine(parsed[0], parsed[1].split(';'));
});

rl.on('close', () => {

    output();
});


function combine(address, timeAndCount) {
    if (result[address]) {
        result[address].time += Number(timeAndCount[0]);
        result[address].count += Number(timeAndCount[1]);
    } else {
        result[address] = {};
        result[address].time = Number(timeAndCount[0]);
        result[address].count = Number(timeAndCount[1]);
    }

}

function output() {
    for (let address in result) {
        if (result.hasOwnProperty(address)) {
            let sum = (result[address].time).toFixed(0);
            console.log(`${address}\t${sum};${result[address].count}`);
        }
    }
}
