//https://www.hackerrank.com/challenges/insertionsort2
//need to fix e into previous pos.
function processData(input) {
    'use strict';
    const size = input.split('\n');
    const arr = size.pop().split(' ');
    let e = 0;
    let prev = 0;
    for(let i = 1; i<size; i++){
        e = arr[i];
        prev = arr[i-1];
        if(e<prev){
            arr.splice(i,1,prev); //copies previous into current position.
            arr.splice(i-1,1,e); //slices e into previous position
            console.log(arr.join(' '));
        }else{
            console.log(arr.join(' '));
        }
    }
} 