'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
    map(null, line.split(' '));
});


function map(key, items) {
    items.forEach((first) => {
        let stripe = {};

        items.forEach((second) => {
            if (first !== second) {
                if (stripe.hasOwnProperty(second)) {
                    stripe[second] += 1;
                } else {
                    stripe[second] = 1;
                }
            }
        });

        output(first, stripe);
    });
}

function output(item, stripe) {
    let stringStripe = JSON.stringify(stripe).replace(/["{}]/g, '');
    console.log(`${item}\t${stringStripe}`);
}