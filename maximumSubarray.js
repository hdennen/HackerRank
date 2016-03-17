//https://www.hackerrank.com/challenges/maxsubarray
//this doesn't work yet.
function processData(input) {
    'use strict';
    const tests = input.split('\n');
    const t = tests.shift();
    const range = function(array, end){ //helper function to create a subarray by range
        let a = [];
        let i = 0;
        while(i<=end){
            a.push(array[i])
            i++;
        }
        return a;
    };
    const findMax = function(test, currentMax){
        for(let i in test){
            let tempMax = range(test,i).reduce((b,a)=> b+a);
            if(tempMax > currentMax){
                currentMax = tempMax;
            }
        }
        test.shift();
        if(test.length > 0){
            findMax(test);
        }
    };
    for (let i=1; i<t*2; i+=2){
        let test = tests[i].split(' ').map(Number);
        let currentMax = 0;
        //console.log(test);
        findMax(test);
        console.log(currentMax);
    }
} 