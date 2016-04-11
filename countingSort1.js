//https://www.hackerrank.com/challenges/countingsort1
function processData(input) {
    'use strict';
    let arr = input.split('\n');
    const len = arr.shift();
    arr = arr[0].split(' ').map(Number);
    let occur = [];
    let i=0;
    let c=0;
    while(i<100){
        c = 0;
        for(let n of arr){
            if(n===i){
                c++;
            }
        }
        occur.push(c);
        i++;
    }
    console.log(occur.join(' '));
} 