//https://www.hackerrank.com/challenges/the-love-letter-mystery
function processData(input) {
    'use strict';
    const strings = input.split('\n');
    const t = strings.shift();
    for(let string of strings){
        let ops = 0; //eventually die antwoord
        let h = Math.floor(string.length/2); //use floor to keep it whole numbered.
        let rString = string.split('').reverse().join('');
        if (string == rString){ //check if it's already a palindrome
            ops = 0;
        }else{
            for(let i=0; i<h; i++){ //only need to go half way
                if(string[i] != rString[i]){
                    let a = string.charCodeAt(i);
                    let b = rString.charCodeAt(i);
                    ops += Math.abs(a - b); //the difference is the number of operations.
                }
            }
        }
        console.log(ops);
    }
} 