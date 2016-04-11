//https://www.hackerrank.com/challenges/countingsort3
function processData(input) {
    'use strict';
    let arr = input.split('\n');
    const len = arr.shift();
    for(let j in arr){
        arr[j] = arr[j].split(' ');
    }
    
    let occur = [];
    let i=0;
    let c=0;
    let tmp = 0
    while(i<100){
        c = 0;
        for(let n=0;n<len;n++){
            if(arr[n][0]==i){
                c++;
            }
        }
        c+=tmp;
        tmp = c;
        occur.push(c);
        i++;
    }
    console.log(occur.join(' '));
} 