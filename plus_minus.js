'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positiveNumberCount = 0
    let negativeNumberCount = 0
    let zeroNumberCount = 0
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] > 0){
            positiveNumberCount++;
        }else if(arr[i] < 0){
            negativeNumberCount++
        }else{
            zeroNumberCount++
        }
    }
    let positiveNumberRatio = console.log((positiveNumberCount / arr.length).toFixed(6))
    let negativeNumberRatio = console.log((negativeNumberCount / arr.length).toFixed(6))
    let zeroNumberRatio = console.log((zeroNumberCount / arr.length).toFixed(6))
    return positiveNumberRatio, negativeNumberRatio, zeroNumberRatio
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
