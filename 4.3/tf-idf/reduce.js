'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});


class Reducer {
    constructor() {
        this.prevWordData = [];
        this.count = 0;
    }

    reduce(wordData, count) {
        wordData = wordData.split(/\#(.+)?/);
        let word = wordData[0];
        let docNumber = wordData[1];

        if (this.prevWordData[0] === word &&
            this.prevWordData[1] === docNumber) {

            this.count += 1;

        } else {

            if (this.prevWordData.length) {
                this.outputPrev();
            }

            this.count = 1;
            this.prevWordData = [word, docNumber];
        }
    }

    outputPrev() {
        console.log(`${this.prevWordData[0]}\t${this.prevWordData[1]}\t${this.count}`);
    }
}

let reducer = new Reducer();


rl.on('line', (line) => {
    let data = line.split('\t');
    reducer.reduce(data[0], data[1]);
});

rl.on('close', () => {
    if (reducer.prevWordData.length) {
        reducer.outputPrev();
    }
});

