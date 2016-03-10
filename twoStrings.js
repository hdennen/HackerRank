//my first method involved looping through a string, and then for each char, looping through the subsequent string to look for a match. this was stupid. Very, very stupid.
//new approach: create an array of potential matches. ie, the alphabet. then see if any of them exist in both strings. Way better approach.
function processData(input) {
    'use strict';
    const arr = input.split('\n'); //array of input lines.
    const t = parseInt(arr.shift()); //first line which also removes it from arr.
    const len = arr.length; //move O(n) operation out of for loop. 
    const alph = 'abcdefghijklmnopqrstuvwxyz'; //the alphabet which we'll loop through.
    for(let i=0;i<len;i+=2){ //loop every other item to effectively loop through test cases.
        let a = arr[i]; //grab current item.
        let b = arr[i+1]; //grab subsequent item.
        for(let x of alph){ //loop through each letter of the alphabet.
            let ai = a.indexOf(x); //grab the 'a' string letter's alphabet position.
            let bi = b.indexOf(x); //grab the 'b' string letter's alphabet position.
            //console.log(ai+' '+bi); //uncomment this to see it working.
            if(ai > -1 && bi > -1){ //if the letter in the alphabet has an index (>-1) in both strings,
                console.log('YES'); //then there is a match,
                break; //and we can stop.
            }
            if(x === 'z'){ //if we've reached the end of the alphabet,
                console.log('NO'); //then there's no match.
            }
        }
    }
}