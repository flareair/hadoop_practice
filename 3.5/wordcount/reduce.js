'use strict';

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {

    var chunk = process.stdin.read();
    replace(null, chunk);
});


function replace(key, line) {
    if (!line) {
        return;
    }

    var prev = [null, 0];

    line.split('\n').filter(Boolean).forEach(function(pair) {
        var current = pair.split('\t');
        current[1] = Number(current[1]);

        if (prev[0] && prev[0] !== current[0]) {
            console.log(prev.join('\t'));
            prev = current;

        } else {
            prev[0] = current[0];
            prev[1] += current[1];
        }
    });

    if (prev[0]) {
        console.log(prev.join('\t'));
    }

}