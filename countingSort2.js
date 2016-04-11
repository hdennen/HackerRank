//https://www.hackerrank.com/challenges/countingsort2
function processData(input) {
    'use strict';
    let arr = input.split('\n');
    const len = arr.shift();
    arr = arr[0].split(' ').map(Number);
    arr = arr.sort((a,b)=>a-b);
    console.log(arr.join(' '));
} 