//https://www.hackerrank.com/challenges/manasa-and-stones
function processData(input) {
    'use strict';
    const arr = input.split('\n').map(Number);
    const t = arr.shift();
    const len = arr.length;
    
    function getPossibles(n,a,b){
        let answer = [];
        let x = n-1;
        let y = 0;
        if(a<b){
            let lo = a*x;
            for(let j=0;j<n;j++){
                answer.push(lo);
                x-=1; //move stone from here,
                y++; //to here.
                lo = (a*x)+(b*y);
            }
        }else if(a>b){
            let lo = b*x;
            for(let j=0;j<n;j++){
                answer.push(lo);
                x-=1;
                y++;
                lo = (b*x)+(a*y);
            }
        }else{ //if a===b
            answer.push(a*x);
        }
        console.log(answer.join(' '));
    }
    
    for(let i=0;i<len;i+=3){ //loop through tests.
        let n = arr[i];
        let a = arr[i+1];
        let b = arr[i+2];
        getPossibles(n,a,b);
    }
} 