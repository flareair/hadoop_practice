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

    reduce(node, rank, outgoing) {
        if (this.prevNode !== node) {
            if (this.prevNode) {
                this.output();
            }
            this.prevNode = node;
            this.prevData = [];
        }

        this.prevData.push([rank, outgoing]);
    }

    calculate(node, data) {
        if (data.length === 1) {
            return [node, '0.000', data[0][1]];
        }

        let pageRank = 0;
        let outgoing = '{}';
        // console.log(data);
        data.forEach((item) => {
            if (item[1] !== '{}') {
                outgoing = item[1];
            } else {
                pageRank += Number(item[0]);
            }
        });

        return [node, pageRank.toFixed(3), outgoing];
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
