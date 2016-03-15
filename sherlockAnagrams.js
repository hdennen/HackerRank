//https://www.hackerrank.com/challenges/sherlock-and-anagrams
//only compare subs of same length.
function processData(input) {
    'use strict';
    const strings = input.split('\n');
    const t = strings.shift();
    for(let string of strings){ //operate on each string.
        let pairs = 0; //eventually Die Antwoord.
        let subs = [];
        let len = string.length;
        let subIn = 1
        for(let si in string){//create array of substrings
            for(let i=subIn;i<=len;i++){
                let subStr = string.substring(si,i);
                let sortedSub = subStr.split('').sort().join('');
                subs.push(sortedSub);
            }
            subIn++;//this right here is the key to all this.
        }
        let sLen = subs.length; //length of substrings array.
        let subStrBIn = 1; //substring B start index
        for(let key in subs){ //first sub string loop
            let subStrA = subs[key];
            let aLen = subStrA.length; //good to pull these out so they don't get unnecessarily recalculated.
            for(let i = subStrBIn; i<sLen; i++){ //comparitive substring loop
                let subStrB = subs[i];
                let bLen = subStrB.length;
                if (aLen === bLen){//all possible same length substring combos.
                    if(subStrA == subStrB){
                        pairs++;
                    }
                } 
            }
            subStrBIn++;
        }
        console.log(pairs);
    }
} 