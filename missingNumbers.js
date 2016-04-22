//https://www.hackerrank.com/challenges/missing-numbers
function processData(input) {
    'use strict';
    let lines = input.split('\n');
    const n = lines[0];
    const m = lines[2];
    const listA = lines[1].split(' ').map(Number);
    const listB = lines[3].split(' ').map(Number);
    const lenB = listB.length;
    const lenA = listA.length;
    
    function getRange(arr){
        let min = 1000010;
        let max = 0;
        let cArr = []; //cache array for counts.
        for(let i=0; i<lenB; i++){ //find the range we're dealing with.
            if(arr[i]>max){
                max = arr[i];
            }
            if(arr[i]<min){
                min = arr[i];
            }
        }
        let c = max - min + 1;
        while(c--){ //populate cache array with range
            cArr[c] = max--;
        }
        return cArr;
    }
    
    let numsArr = getRange(listB);
    let answer = [];
    let occurA = new Array(numsArr[numsArr.length-1]).fill(0);
    let occurB = new Array(numsArr[numsArr.length-1]).fill(0);
    for(let i=0;i<lenA;i++){
        occurA[listA[i]]++;
    }
    for(let i=0;i<lenB;i++){
        occurB[listB[i]]++;
    }
    let d = numsArr.length;
    while(d--){
        let x = occurB[numsArr[d]]-occurA[numsArr[d]];
        if(x>0){
            answer.unshift(numsArr[d]);
        }
    }
    console.log(answer.join(' '));
} 