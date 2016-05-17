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
    
    let cacheLen = 10001;
    let arr = new Array(cacheLen).fill(0);
    
    function crunchy(a, b){
        while(a--){
            arr[listA[a]]--;
        }
        while(b--){
            arr[listB[b]]++;
        }
    };
    function check(cache, callback){
        let answer = [];
        while(cacheLen--){
            if(cache[cacheLen]>0){
                answer.unshift(cacheLen);
            }
        };
        console.log(answer.join(' '));
    };
    check(arr, crunchy(lenA,lenB));
} 