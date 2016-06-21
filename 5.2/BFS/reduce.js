'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});


class Reducer {
    constructor() {
        this.prevNode = '';
        this.prevData = [];
    }

    reduce(node, distance, outgoing) {
        if (this.prevNode !== node) {
            if (this.prevNode) {
                this.output();
            }
            this.prevNode = node;
            this.prevData = [];
        }

        this.prevData.push([distance, outgoing]);
    }

    calculate(node, data) {
        if (data.length === 1) {
            return [node, data[0][0], data[0][1]];
        }

        let outgoing = '{}';
        let distance = Infinity;
        data.forEach((item) => {
            if (item[0] !== 'INF' && Number(item[0]) < distance) {
                distance = Number(item[0]);
            }
            if (item[1] !== '{}') {
                outgoing = item[1];
            }
        });

        if (distance === Infinity) {
            distance = 'INF';
        }

        return [node, distance, outgoing];
    }

    output() {
        let outputData = this.calculate(this.prevNode, this.prevData);
        console.log(`${outputData[0]}\t${outputData[1]}\t${outputData[2]}`);
    }
}

let reducer = new Reducer();


rl.on('line', (line) => {
    let data = line.split('\t');

    reducer.reduce(data[0], data[1], data[2]);
});

rl.on('close', () => {
    reducer.output();
});
