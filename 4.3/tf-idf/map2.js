'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});


class Mapper {
    constructor() {
        // construct
    }

    map(data) {
        if (data.length) {
            console.log(`${data[0]}\t${data[1]};${data[2]};1`);
        }
    }
}

let mapper = new Mapper();


rl.on('line', (line) => {
    let data = line.split('\t');
    mapper.map(data);
});

rl.on('close', () => {
    // on end of input
});

