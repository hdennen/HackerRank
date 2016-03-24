//basics of quicksort algorithm.
function processData(input) {
    'use strict';
    const size = input.split('\n');
    const arr = size.pop().split(' ').map(Number);
    
    let left = [];
    let equal = [];
    let right = [];
    
    let p = arr[0];
    let i = 0;
    while(i<size){
        if(p > arr[i]){
            left.push(arr[i]);
        }else if(p < arr[i]){
            right.push(arr[i]);
        }else{
            equal.push(arr[i]);
        }
        i++;
    }
    console.log(left.join(' ')+" "+equal.join(' ')+" "+right.join(' '));
} 