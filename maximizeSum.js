//https://www.hackerrank.com/challenges/maximize-sum
function processData(input) {
    'use strict';
    const tests = input.split('\n');
    const t = tests.slice(0,1);
    
    function kadane(test, m){ //modified Kadane's algorithm to return subarray modulo max.
        let currentTotal = test[0]; 
        let maxSoFar = test[0];
        let len = test.length;
        let totals = [];
        for(let i=1;i<len;i++){
            currentTotal = Math.max(test[i], currentTotal+test[i]);
            maxSoFar = Math.max(maxSoFar%m,currentTotal%m);
        }
        return maxSoFar;
    }
    
    for (let i=1; i<t*2; i+=2){ //loop through each test
        let m = tests[i].split(' ').map(Number).pop();
        let test = tests[i+1].split(' ').map(Number);
        console.log(kadane(test,m));
    }
} 