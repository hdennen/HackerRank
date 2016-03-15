//https://www.hackerrank.com/challenges/sherlock-and-anagrams
//only compare subs of same length.
function processData(input) {
    'use strict';
    const strings = input.split('\n');
    const t = strings.shift();
    let pairs = 0;
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
        //console.log(subs);
        let sLen = subs.length; //length of substrings array.
        let subStrBIn = 1; //substring B start index
        for(let key in subs){ //first sub string loop
            let subStrA = subs[key];
            let aLen = subStrA.length; //good to pull these out so they don't get unnecessarily recalculated.
            for(let i = subStrBIn; i<sLen; i++){ //comparitive substring loop
                let subStrB = subs[i];
                let bLen = subStrB.length;
                if (aLen === bLen){
                    console.log(subStrA+' '+subStrB);
                } 
            }
            subStrBIn++;
        }
        //console.log(pairs);
    }
} 