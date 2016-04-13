//https://www.hackerrank.com/challenges/sherlock-and-watson
function processData(input) {
    'use strict';
    let lines = input.split('\n');
    const nkq = lines[0].split(' ');
    const len = parseInt(nkq[0]);
    const cycles = nkq[1];
    const queries = nkq[2];
    let arr = lines[1].split(' ');
    
    let tc = cycles%len;
    
    for(let i=2; i<cycles+2; i++){
        let qi = parseInt(lines[i]);
        let iTop = len-1;
        if(qi>=tc){
            console.log(arr[qi-tc]);
        }else if(qi<tc){
            console.log(arr[qi+len-tc]);
        }
    }
} 