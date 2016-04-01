//https://www.hackerrank.com/challenges/sherlock-and-array
function processData(input) {
    'use strict';
    const lines = input.split('\n');
    const t = lines.shift();
    const stop = t*2-1;
    for (let i=0; i<stop; i+=2){
        let len = lines[i];
        let arr = lines[i+1].split(' ').map(Number);
        let j = 0;
        while(j<len){
            j++;
            if(j === len-1){
                console.log('NO');
                break;
            }
            let left = arr.slice(0,j).reduce((a,b)=>a+b);
            let right = arr.slice(j+1,len).reduce((a,b)=>a+b);
            if(left === right){
                console.log('YES');
                break;
            }
        }
    }
} 