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
        let testNC = tests[i].split(' ').map(Number);
        let currentMax = -10000; //within range of input.
        let tempMax = 0;
        var max = 0; 
        var ncMax = 0;
        findMax(test, tempMax, currentMax);
        findNCMax(testNC);
        console.log(max+' '+ncMax);
    }
} 