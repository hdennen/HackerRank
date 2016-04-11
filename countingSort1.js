//https://www.hackerrank.com/challenges/countingsort1
function processData(input) {
    'use strict';
    let arr = input.split('\n');
    const len = arr.shift();
    arr = arr[0].split(' ').map(Number);
    let occur = [];
    let i=0;
    while(i<100){
        occur.push(arr.reduce((pV,cV)=> pV+(cV===i), 0)); //reduce magic.
        i++;
    }
    console.log(occur.join(' '));
}