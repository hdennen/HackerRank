//https://www.hackerrank.com/challenges/maximize-sum
function processData(input) {
    'use strict';
    const tests = input.split('\n');
    const t = tests.slice(0,1);
    
    function modKadane(test, m){ //modified Kadane's algorithm to return subarray modulo max.
        let modCurrentTotal = 0;
        let modMaxSoFar = 0;
        let len = test.length;
        let totals = [];
        for(let i=1;i<len;i++){
            modCurrentTotal = Math.max(test[i]%m, (modCurrentTotal+test[i])%m);
            modMaxSoFar = Math.max(modMaxSoFar%m,modCurrentTotal%m);
        }
        return modMaxSoFar;
    }
    
    for (let i=1; i<t*2; i+=2){ //loop through each test
        let m = tests[i].split(' ').map(Number).pop();
        let test = tests[i+1].split(' ').map(Number);
        console.log(modKadane(test,m));
    }
} 