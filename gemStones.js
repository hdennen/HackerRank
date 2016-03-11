//so dumb. I originally wrote the letter indexes as keys in the rocksAlph object, instead of writing the letter of the alphabet I was counting! And forgot to actually check that the letter existed in the rock string.
function processData(input) {
    'use strict';
    const rocks = input.split('\n'); //grab each line, after shift creates array of rocks.
    const nR = rocks.shift(); //shift out first line to get number Rocks and remove it from 'rocks' array.
    const alph = 'abcdefghijklmnopqrstuvwxyz'; //create alphabet array.
    let rocksAlph = {}; //initialize rock alphabet object for storing rock letter alphabet indexes.
    let gemElements = 0; //initialize our gem element count.
    for(let each of rocks){ //loop through each rock.
        for(let letter of alph){ //loop through the alphabet for each letter of each rock.
            let iAlph = each.indexOf(letter); //find the alphabet index of each letter in each rock.
            if (!rocksAlph.hasOwnProperty(letter) && iAlph > -1){ //check if this letter exists in the index, AND make sure the letter exists in the rock!!!
                rocksAlph[letter] = 0; //if it doesn't, initialize our holder value,
                rocksAlph[letter]++; //and increment it.
            }else if(iAlph > -1){ //again, actually make sure the letter exists.
                rocksAlph[letter]++; //and increment it.
            }
        }
    }
    for(let key in rocksAlph){ //loop by index for the object.
        if(rocksAlph[key] == nR){ //check that the number of letters equals the number of rocks and make sure it's not a false positive from happening to have the same number of non-index letters.
            gemElements++; //if satisfied make it a gem element.
        }
    }
    console.log(gemElements);
} 