//https://www.hackerrank.com/challenges/countingsort4
function processData(input) {
    'use strict';
    const arr = input.split('\n');
    const len = arr.shift();
    const h = len/2;
    for(let j in arr){
        arr[j] = arr[j].split(' ');
    }
    let answer = [];
    let sortedArr = [];
    let c=0;
    for(let i=0;i<100;i++){
        c = 0;
        for(let n=0;n<len;n++){
            if(arr[n][0]==i){
                c++;
                sortedArr.push([arr[n][0],arr[n][1],n]);
            }
        }
        if(c===0){
            break;
        }
    }
    for(let x of sortedArr){
        if(x[2]>=h){
            answer.push(x[1]);
        }else{
            answer.push('-');
        }
    }
    console.log(answer.join(' '));
} 