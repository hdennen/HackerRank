//https://www.hackerrank.com/challenges/anagram
//count letter differences in each string, then divide by 2 because only have to change one.
function processData(input) {
    'use strict';
    const strings = input.split('\n');
    const t = strings.shift();
    const a = 'abcdefghijklmnopqrstuvwxyz'; //could generate this with a for loop but whatever.
    const addLetters = function(strObj, ai, x){
        if(!strObj[ai]){
            strObj[ai] = [0,0];
            strObj[ai][x]++;
        }else{
            strObj[ai][x]++;
        }
    }
    for (let string of strings){
        let strObj = {}; //reset it for each string
        if(string.length%2 != 0){ //get rid of the odds.
            strObj = -1;
            console.log(strObj);
        }else{
            let len = string.length;
            let h = len/2;
            for(let i=0;i<h;i++){ //loop through first half.
                let ai = string[i];
                addLetters(strObj, ai, 0); //use letter array[0] for first string letters.
            }
            for(let i=h;i<len;i++){ //loop through second half.
                let ai = string[i];
                addLetters(strObj, ai, 1);//use letter array[1] for second string letters.
            }
            let total = 0;
            for(let each in strObj){
                if(each === -1){
                    changes = -1;
                }else{
                    let diff = Math.abs(strObj[each][0] - strObj[each][1]);
                    total += diff;
                }
            }
            let changes = total/2;
            console.log(changes);
        }
    }
} 