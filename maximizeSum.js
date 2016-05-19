//https://www.hackerrank.com/challenges/maximize-sum
function processData(input) {
    'use strict';
    const tests = input.split('\n');
    const t = tests.slice(0,1);
    
    function bruteForce(test, m){
        let len = test.length;
        let prefix = [];
        let curr = 0;
        for(let i=0; i<len; i++) { //make prefix table of mods.
            curr = (test[i] % m + curr) % m;
            prefix[i] = curr;
        }
        
        let modMax = 0;
        for(let i=0; i<len; i++) {
            for(let j=i-1; j>=0; j--) {
                modMax = Math.max(modMax, (prefix[i] - prefix[j] + m) % m);
            }
            modMax = Math.max(modMax, prefix[i]);
        }
        return modMax;
    }

    for (let i=1; i<t*2; i+=2){ //loop through each test
        let m = tests[i].split(' ').map(Number).pop();
        let test = tests[i+1].split(' ').map(Number);
        console.log(bruteForce(test,m));
    }
}