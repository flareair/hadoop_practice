'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});


class Mapper {
    constructor() {
        this.prevUser = '';
        this.prevData = '';
        this.temp = {
        };

        this.resetTemp();
    }

    map(user, data) {
        if (this.prevUser && this.prevUser === user) {
            this.appendToTemp(data);
        } else {
            if (this.checkTemp()) {
                this.outputData();
            }

            this.resetTemp();

            this.prevUser = user;
            this.appendToTemp(data);
        }
    }

    appendToTemp(data) {
        this.temp[data[0]].push(data[1]);
    }

    resetTemp() {
        this.temp = {
            query: [],
            url: []
        };
    }

    checkTemp() {
        if (this.temp.query.length && this.temp.query.length) {
            return true;
        }

        return false;
    }

    outputData() {
        this.temp.query.forEach((query) => {
            this.temp.url.forEach((url) => {
                console.log(`${this.prevUser}\t${query}\t${url}`);
            });
        });
    }
}

let mapper = new Mapper();


rl.on('line', (line) => {
    let data = line.split('\t');
    mapper.map(data[0], data[1].split(':'));
});

rl.on('close', () => {
    if (mapper.checkTemp()) {
        mapper.outputData();
    }
});

