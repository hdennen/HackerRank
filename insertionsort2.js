//https://www.hackerrank.com/challenges/insertionsort2
//Doesn't work if a duplicate is at the beginning of array
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
            arr.splice(i-1,1); //deletes old location.
            let ib = i;
            while(ib--){
                if(arr[ib]<e){
                    arr.splice(ib+1,0,e); //slices e into previous position
                    console.log(arr.join(' '));
                }else if(ib == 0){
                    arr.splice(ib,0,e); //slices e into current pos if at index 0.
                    console.log(arr.join(' '));
                }
            }
        }else{
            console.log(arr.join(' '));
        }
    }
} 