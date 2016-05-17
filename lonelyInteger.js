//https://www.hackerrank.com/challenges/lonely-integer

function processData(input) {
    'use strict';
    let arr = input.split('\n');
    const len = parseInt(arr[0]);
    const nums = arr[1].split(' ').map(Number);
    
    let cache = new Array(100).fill(0);
    
    function populate(x){
        while(x--){
            cache[nums[x]]++;
        };
    };
    function check(y, callback){
        while(y--){
            if(cache[y] === 1){
                console.log(y);
                break;
            }
        };
    };
    check(100, populate(len));
} 