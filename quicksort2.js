//https://www.hackerrank.com/challenges/quicksort2
//printing at the right time but not sorting correctly.
function processData(input) {
    'use strict';
    const size = input.split('\n');
    const array = size.pop().split(' ').map(Number);
    
    let partition = function(arr){ //sort function.
        let p = arr[0];
        let len = arr.length;
        let left = [];
        let equal = [];
        let right = [];
        for(let i=0;i<len;i++){
            let c = arr[i];
            if(p>c){
                left.push(c);
            }else if(p<c){
                right.push(c);
            }else{
                equal.push(c);
            }
        }
        if(left.length>1){
            partition(left);
            console.log(left.join(' '));
        }
        if(right.length>1){
            partition(right);
            console.log(right.join(' '));
        }
        return left.join(' ') +" "+ p +" "+ right.join(' ');
    }
    
    console.log(partition(array));

} 