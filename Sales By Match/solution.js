'use strict';

const fs = require('fs');

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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

// ********** SOLUTION CODE STARTS HERE **********
function sockMerchant(n, ar) {
    // Write your code here
    let pairsCount = 0
    let checkedColors = []
    for( let i = 0; i < ar.length ; i++ ){
        let index = i
        let item = ar[i]
    
        if(!checkedColors.includes(item)){
            const filterArr = ar.filter( arItem => arItem === item )
            if(filterArr.length > 1){
                if(filterArr.length % 2 === 0){
                    let pairFound = filterArr.length/2
                    pairsCount += pairFound
    
                }else{
                    let pairFound = (filterArr.length -1)/2
                    pairsCount += pairFound
                }
            }
            checkedColors.push(item)
        }
    }

    return pairsCount
    
}

// ********** SOLUTION CODE ENDS HERE **********

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
