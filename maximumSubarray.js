//https://www.hackerrank.com/challenges/maxsubarray
//replaced my recursive function with Kadane's algorithm. fixed to handle negatives.
function processData(input) {
    'use strict';
    const tests = input.split('\n');
    const t = tests.shift();
    const kadane = function(test){ //Kadane's algorithm for max contiguous array.
        let currentTotal = test[0]; 
        let maxSoFar = test[0];
        let len = test.length;
        for(let i=1;i<len;i++){
            currentTotal = Math.max(test[i], currentTotal+test[i]);
            maxSoFar = Math.max(maxSoFar,currentTotal)
        }
        max = maxSoFar;
    }
    const findNCMax = function(testNC){ //find non-contiguous sub array max. sum of positives.
        testNC.sort((a,b)=> a-b).reverse(); //special sort for integers. 
        let subArr = [];
        let biggestNeg = 0;
        for(let i in testNC){
            if(testNC[i]>-1){
                subArr.push(testNC[i]);
            }else{
                biggestNeg = testNC[i]; //save the biggest negative just in case.
                break;
            }
        }
        if(subArr.length>0){
            ncMax = subArr.reduce((b,a)=> b+a);
        }else{
            ncMax = biggestNeg;
        }
    }
    for (let i=1; i<t*2; i+=2){ //loop through each test
        let test = tests[i].split(' ').map(Number);
        var max = 0; 
        var ncMax = 0;
        kadane(test);
        findNCMax(test);
        console.log(max+' '+ncMax);
    }
} 