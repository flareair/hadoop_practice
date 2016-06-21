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

    map(node, distance, outgoing) {
        console.log(`${node}\t${distance}\t${outgoing}`);

        if (outgoing !== '{}') {

            outgoing = outgoing.replace(/[{}]/g, '').split(',').filter(Boolean).map(Number);

            let outputDistance = distance === 'INF' ? 'INF' : Number(distance) + 1;

            outgoing.forEach((node) => {
                console.log(`${node}\t${outputDistance}\t{}`);
            });
        }
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

