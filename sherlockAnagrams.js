//https://www.hackerrank.com/challenges/sherlock-and-anagrams
//only compare subs of same length.
function processData(input) {
    'use strict';
    const strings = input.split('\n');
    const t = strings.shift();
    for(let string of strings){ //operate on each string.
        let subs = [];
        let len = string.length;
        let subIn = 1
        for(let si in string){//create array of substrings
            for(let i=subIn;i<=len;i++){
                subs.push(string.substring(si,i));
            }
            subIn++;//this right here is the key to all this.
        }
        console.log(subs);
    }
} 