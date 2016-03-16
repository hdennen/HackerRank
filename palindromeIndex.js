//https://www.hackerrank.com/challenges/palindrome-index
//first check if it already is one.
//then compare a reversed version and look for the difference.
function processData(input) {
    'use strict';
    const strings = input.split('\n');
    const t = strings.shift();
    for(let string of strings){
        let strArr = string.split(''); //I leave these arrays for the reverse and splice methods.
        let rStrArr = string.split('').reverse();
        if(strArr.join('') == rStrArr.join('')){ //check if it's already a palindrome as string. As array it will check each item.
            console.log(-1);
        }else{
            for(let i in strArr){
                if(strArr[i] != rStrArr[i]){ //find non match
                    strArr.splice(i,1); //cut it
                    if(strArr.join('') == strArr.reverse().join('')){ //see if that works.
                        console.log(i);
                        break;
                    }else{
                        console.log(strArr.length - i); //if it doesn't then calculate it's opposite and print that.
                        break;
                    }
                }
            }
        }
    }
} 