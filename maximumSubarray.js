//https://www.hackerrank.com/challenges/maxsubarray
//only calculates contiguous max.
function processData(input) {
    'use strict';
    const tests = input.split('\n');
    const t = tests.shift();
    const range = function(array, end){ //helper function to create a subarray by range
        let a = [];
        let ai = 0;
        while(ai<=end){
            a.push(array[ai]);
            ai++;
        }
        return a;
    };
    const findMax = function(test, tempMax, currentMax){ //recursive function to find max of contiguous array.
        for(let i in test){
            tempMax = range(test,i).reduce((b,a)=> b+a);
            if(tempMax > currentMax){
                currentMax = tempMax;
            }
        }
        test.shift();
        if(test.length > 0){
            findMax(test, tempMax, currentMax);
        }else{
            max = currentMax;
        }
    };
    for (let i=1; i<t*2; i+=2){ //loop through each test
        let test = tests[i].split(' ').map(Number);
        let currentMax = 0;
        let tempMax = 0;
        var max = 0; 
        findMax(test, tempMax, currentMax);
        console.log(max);
    }
} 