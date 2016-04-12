//https://www.hackerrank.com/challenges/countingsort1
function processData(input) {
    'use strict';
    let arr = input.split('\n');
    const len = arr.shift();
    arr = arr[0].split(' ').map(Number);
    let occur = new Array(100).fill(0);
    for(let i=0;i<len;i++){
        occur[arr[i]]++;
    }
    console.log(occur.join(' '));
} 