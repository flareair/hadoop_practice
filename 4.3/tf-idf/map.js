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

    map(docNumber, string) {
        string.split(/[\s\:\;\!\?\,\.\(\)\[\]\{\}\@\#\%]/).filter(Boolean).forEach((word) => {
            console.log(`${word}#${docNumber}\t1`);
        });
    }
}

let mapper = new Mapper();


rl.on('line', (line) => {
    let data = line.split(/\:(.+)?/);
    mapper.map(data[0], data[1]);
});

rl.on('close', () => {
    //
});

