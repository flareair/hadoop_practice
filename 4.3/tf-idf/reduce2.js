'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});


class Reducer {
    constructor() {
        this.prevWord = '';
        this.result = [];
        this.count = 0;
    }

    reduce(word, wordData) {
        wordData = wordData.split(';');

        let docName = wordData[0];
        let tf = wordData[1];

        if (this.prevWord && this.prevWord === word) {
            this.count += 1;
            // this.result.push([word, docName]);
        } else {
            if (this.result.length) {
                this.output();
            }
            this.result = [];
            this.prevWord = word;
            this.count = 1;
        }

        this.result.push({
            word: word,
            docName: docName,
            tf: tf
        });

    }

    output() {
        this.result.forEach((item) => {
            console.log(`${item.word}#${item.docName}\t${item.tf}\t${this.count}`);
        });
    }
}

let reducer = new Reducer();


rl.on('line', (line) => {
    let data = line.split('\t');
    reducer.reduce(data[0], data[1]);
});

rl.on('close', () => {
    if (reducer.result.length) {
        reducer.output();
    }
});
