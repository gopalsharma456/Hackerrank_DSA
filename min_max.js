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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function miniMaxSum(arr) {
    // Write your code here
    const newArray = arr.sort()
    let minimumSum = 0
    let maximumSum = 0
    
    for(let i = 0; i < arr.length - 1; i++){
        minimumSum += arr[i]
    }
       
    for(let i = 1; i < arr.length; i++){
        maximumSum += arr[i]
    }
    return console.log(`${minimumSum} ${maximumSum}`)
}
function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
