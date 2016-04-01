//https://www.hackerrank.com/challenges/icecream-parlor
function processData(input) {
    'use strict';
    const lines = input.split('\n');
    const t = lines.shift();
    const len = t*3;
    
    for(let i=0; i<len; i+=3){
        let m = lines[i];
        let n = lines[i+1];
        let arr = lines[i+2].split(' ').map(Number);
        let arr2 = lines[i+2].split(' ').map(Number).sort((a,b)=>a-b);
        let j = 0
        if (arr2.indexOf(m) != -1){
            j = arr2.indexOf(m)-1; //use this for j
        }else{
            for(j=0;j<n;j++){ //or go find j
                if(arr2[j]>m){
                    break;
                }
            }
        }
        let jNum = 0;
        let pNum = 0;
        big: while(j--){
            let p = 0;
            jNum = arr2[j];
            let mark = m-jNum;
            while(p<j){
                pNum = arr2[p];
                if(pNum == mark){
                    break big;
                }
                p++;
            }
        }
        let pI = arr.indexOf(pNum)+1;
        let jI = arr.indexOf(jNum)+1;
        if (pI == jI){
            arr.splice(pNum-1,1);
            jI = arr.indexOf(jNum)+2;
            console.log(pI+" "+jI);
        }else if(pI < jI){
            console.log(pI+" "+jI);
        }else if(pI > jI){
            console.log(jI+" "+pI);
        }
    }
} 