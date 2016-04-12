//https://www.hackerrank.com/challenges/countingsort3
function processData(input) {
    'use strict';
    let arr = input.split('\n');
    const len = arr.shift();
    let frequency = new Array(100).fill(0);
    let sorted = [];
    let helper = [];
    
    for(let i=0;i<len;i++){
        frequency[parseInt(arr[i].slice(0,2))]++;
    }
    for(let i=0;i<100;i++){
        let n = frequency[i];
        if(n>0){
            while(n--){
               sorted.push(i); 
            }
        }
    }
    let x = 0;
    for(let i=0;i<100;i++){
        x += frequency[i];
        helper.push(x);
    }
    console.log(helper.join(' '));
}  