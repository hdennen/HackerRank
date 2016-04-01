//https://www.hackerrank.com/challenges/sherlock-and-array
function processData(input) {
    'use strict';
    const lines = input.split('\n');
    const t = lines.shift();
    const stop = t*2-1;
    for (let i=0; i<stop; i+=2){
        let len = lines[i];
        if(len == 1){
            console.log('YES');
        }else if(len == 2){
            console.log('NO');
        }else if(len >2){
            let arr = lines[i+1].split(' ').map(Number);
            let j = 1;
            let left = 0;
            let right = arr.slice(1,len).reduce((a,b)=>a+b); //only need to sum once!
            while(j<len){
                if(j == len-1){//end of array?
                    console.log('NO');
                    break;
                }
                left +=  arr[j-1]; //then just move values over from right to left...
                right -= arr[j];
                if(left === right){ //and check if they're ever equal
                    console.log('YES');
                    break;
                }
                j++;
            }
        }
    }
} 