//https://www.hackerrank.com/challenges/cut-the-sticks
function main() {
    'use strict';
    var n = parseInt(readLine());
    var arr = readLine().split(' ');
    var arr = arr.map(Number);
    
    arr.sort((a,b)=>a-b);
    
    function cut(arrc){
        let tempArr = [];
        let len = arrc.length;
        let cutLen = arrc[0];
        let cuts = 0;
        for(let x of arrc){
            let t = x-cutLen;
            cuts++;
            if(t>0){
                tempArr.push(t);
            }
        }
        console.log(cuts);
        if(tempArr.length > 0){
            cut(tempArr);
        }
    }
    cut(arr);
}