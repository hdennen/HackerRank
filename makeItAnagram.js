//count the letter differences between each string.
function processData(input) {
    'use strict';
    const strings = input.split('\n');
    const strObj = {};
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    let deletions = 0; 
    for(let i in strings){ //each string.
        for(let letter of strings[i]){
            let letterIndex = alph.indexOf(letter); //grab the alph index of the letter.
            if (!strObj[alph[letterIndex]]){ //check if string object letter doesn't exist in the string object.
                strObj[alph[letterIndex]] = [0,0]; //initialize letter value as array.
                strObj[alph[letterIndex]][i] = 1; //if true then add it with a value of 1.
            } else{
                strObj[alph[letterIndex]][i] += 1; //or just up it's value if it's already there.
            }
        }
    }
    //now we have a string object of letter counts for each string in the strObj object.
    for(let key in strObj){ //Get the absolute value difference of each array item.
        deletions += Math.abs(strObj[key][0] - strObj[key][1]); //count up our deletions.
    }
    console.log(deletions);
} 