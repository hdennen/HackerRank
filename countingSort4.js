//https://www.hackerrank.com/challenges/countingsort4
function processData(input) {
    'use strict';
    let arr = input.split('\n');
    const len = parseInt(arr.shift());
    const h = len/2;
    let frequency = new Array(100).fill(0);
    let sorted = [];
    let helper = [];
    let answer = new Array(len);
    
    for(let i=0;i<len;i++){
        frequency[parseInt(arr[i].slice(0,2))]++;
    }
    for(let i=0;i<100;i++){
        let n = frequency[i];
        if(n>0){
            while(n--){
               sorted.push(i); 
            }
        }
    }
    let x = 0;
    for(let i=0;i<100;i++){
        x += frequency[i];
        helper.push(x);
    }
    for(let i=0;i<len;i++){
        let num = parseInt(arr[i].slice(0,2));
        let letters = '';
        if(i<h){
            letters = '-';
        }else if(num<10){
            letters = arr[i].slice(2);
        }else {
            letters = arr[i].slice(3);
        }
        let pos = helper[num]-frequency[num] ;
        answer[pos] = letters;
        frequency[num]--;
    }
    console.log(answer.join(' '));
}  