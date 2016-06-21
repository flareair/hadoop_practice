'use strict';

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {

    var chunk = process.stdin.read();
    map(null, chunk);
});


function map(key, line) {
    if (!line) {
        return;
    }

    line.replace(/\n/g, " ").split(' ').filter(Boolean).forEach(function(word) {
        process.stdout.write(word + '\t' + '1\n');
    });
}