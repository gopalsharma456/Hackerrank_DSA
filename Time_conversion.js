'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let restOfString = s.slice(2, 8)
    if (s.startsWith('0') && s.endsWith('AM') || s.endsWith('am')) {
        let hr = s.slice(0, 2)
        return '0' + parseInt(hr) + restOfString
    } else if (s.startsWith("12") && s.endsWith('AM') || s.endsWith('am')) {
        return "00" + restOfString
    } else if (s.startsWith('12') && s.endsWith('PM') || s.endsWith('pm')) {
        let hr = s.slice(0, 2)
        return parseInt(hr) + restOfString
    } else if (s.endsWith('PM') || s.endsWith('pm')) {
        let hr = s.slice(0, 2)
        return parseInt(hr) + 12 + restOfString
    } else {
        return s
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
