//https://www.hackerrank.com/challenges/maximizing-xor
//O(n^2) not optimal.
function maxXor(l, r) {
    'use strict';
    let max = 0;
    for(let i=l; i<=r; i++){
        for(let x=l; x<=r; x++){
            let xor = i^x;
            if(xor > max){
                max = xor;
            }
        };
    };
    return max;
}