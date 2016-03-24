//https://www.hackerrank.com/challenges/runningtime
//incedentally this is the proper way of doing an insertion sort. I made one that was a little more complicated and used less shifts.
function processData(input) {
    'use strict';
    const size = input.split('\n');
    const arr = size.pop().split(' ').map(Number);
    let e = 0;
    let prev = 0;
    let shiftCount = 0;
    for(let i = 1; i<size; i++){
        e = arr[i];
        let j = i-1;
        while(prev >= 0 && arr[j]>e){
            arr.splice(j+1,1,arr[j]); //copies previous into current position.
            shiftCount++;
            j--;
        }
        arr.splice(j+1,1,e);
    }
    console.log(shiftCount);
}