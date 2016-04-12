//https://www.hackerrank.com/challenges/countingsort2
function processData(input) {
    'use strict';
    let arr = input.split('\n');
    const len = arr.shift();
    arr = arr[0].split(' ').map(Number);
    let occur = new Array(100).fill(0);
    let answer = [];
    
    for(let i=0;i<len;i++){
        occur[arr[i]]++;
    }
    for(let i=0;i<100;i++){
        let n = occur[i];
        if(n>0){
            while(n--){
               answer.push(i); 
            }
        }
    }
    console.log(answer.join(' '));
} 