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
            if (!rocksAlph.hasOwnProperty(iAlph)){ //check if this letter index exists yet.
                rocksAlph[iAlph] = 0; //if it doesn't, initialize our holder value,
                rocksAlph[iAlph]++; //and increment it.
            }else{
                rocksAlph[iAlph]++; //otherwise just increment what already exists.
            }
        }
    }
    for(let key in rocksAlph){ //loop by index for the object.
        
        //console.log(key+' '+rocksAlph[key]+' '+rocksAlph[-1]);
        if(rocksAlph[key] == nR && key != '-1'){ //check that the number of letters equals the number of rocks and make sure it's not a false positive from happening to have the same number of non-index letters.
            gemElements++; //if satisfied make it a gem element.
        }
    }
    console.log(gemElements);
} 