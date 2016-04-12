//https://www.hackerrank.com/challenges/closest-numbers
function processData(input) {
    'use strict';
    let arr = input.split('\n');
    const len = arr.shift();
    arr = arr[0].split(' ').map(Number);
    let lows = [];
    
    arr.sort((a,b)=>a-b);
    let diff = 0;
    let lowest = 0;
    for(let i=1;i<len;i++){
        diff = Math.abs(arr[i]-arr[i-1]);
        if(diff<lowest || i===1){
            lowest = diff;
            lows = [];
            lows.push(arr[i-1],arr[i]);
        }else if(diff === lowest){
            lows.push(arr[i-1],arr[i]);
        }
    }
    console.log(lows.join(' '));
} 