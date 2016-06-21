'use strict';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});


class Grath {
    constructor() {
        this.verticesCount = null;
        this.edgesCount = null;
        this.weigths = {};
        this.start = null;
        this.end = null;


        this.minimalWeigths = [];
        this.visited = [];
    }

    appendWeigth(data) {
        if (!this.weigths.hasOwnProperty(data[0])) {
            this.weigths[data[0]] = {};
        }

        this.weigths[data[0]][data[1]] = data[2];

        return this.weigths[data[0]][data[1]];
    }

    init() {
        for (let i = 1; i <= this.verticesCount; i++) {
            this.minimalWeigths[i] = Infinity;
        }

        this.minimalWeigths[this.start] = 0;
    }

    calculate() {
        // copy an array
        let count = 1;
        while (count <= 4) {
            let minimalNode = this.extractMinimal();

            for (let sibling in this.weigths[minimalNode]) {

                if (this.minimalWeigths[sibling] > this.minimalWeigths[minimalNode] + this.weigths[minimalNode][sibling]) {

                    this.minimalWeigths[sibling] = this.minimalWeigths[minimalNode] + this.weigths[minimalNode][sibling];
                }
            }

            count++;
            this.visited.push(minimalNode);
        }

    }

    extractMinimal() {
        let temp = this.minimalWeigths.slice();


        this.visited.forEach((item) => {
            temp[item] = Infinity;
        });

        temp.sort((a, b) => {
            return a - b;
        });

        return this.minimalWeigths.indexOf(temp[0]);
    }

    output() {
        // console.log(this.minimalWeigths);
        if (this.minimalWeigths[this.end] === Infinity) {
            return console.log(-1);
        }
        console.log(this.minimalWeigths[this.end]);
    }


}


let grath = new Grath();

rl.on('line', (line) => {
    let data = line.split(' ').map(Number);


    if (data.length === 2) {
        if (!grath.verticesCount) {
            grath.verticesCount = data[0];
            grath.edgesCount = data[1];
        } else {
            grath.start = data[0];
            grath.end = data[1];
        }
    } else {
        grath.appendWeigth(data);
    }

});

rl.on('close', () => {
    grath.init();
    grath.calculate();
    grath.output();
});

