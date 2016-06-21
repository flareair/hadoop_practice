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

    map(node, rank, outgoing) {
        console.log(`${node}\t${rank}\t${outgoing}`);

        outgoing = outgoing.replace(/[{}]/g, '').split(',').filter(Boolean).map(Number);

        let outputPR = (rank / outgoing.length).toFixed(3);

        outgoing.forEach((node) => {
            console.log(`${node}\t${outputPR}\t{}`);
        });

    }
}

let mapper = new Mapper();


rl.on('line', (line) => {
    let data = line.split('\t');

    mapper.map(data[0], data[1], data[2]);
});

rl.on('close', () => {
    //
});
