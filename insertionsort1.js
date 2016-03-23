//https://www.hackerrank.com/challenges/insertionsort1
function processData(input) {
    'use strict';
    const size = input.split('\n');
    const arr = size.pop().split(' ');
    const e = arr.slice(-1).join('');
    for(let i = size-2; i>=0; i--){
        
        if(arr[i] > e){
            arr.splice(i+1,1,arr[i]);
        }else if(arr[i] <= e){
            arr.splice(i+1,1,e);
        }
        console.log(arr.join(' '));
    }
}