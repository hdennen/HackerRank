function processData(input) {
    //maximum of one letter can have an odd amount, all others must have an even amount.
    //My fastest method:
    //check for odd amounts, if more than 1 then terminate and return 'NO'
    //otherwise return 'YES'
    'use strict';
    const a = input.split(''); //create array out of input.
    let counts = {}; //initialize our counts object.
    let odd = 0; //initialize our count of odd numbers.
    for(let i in a){ //loop through array indexes.
        let c = a[i]; //get array item value.
        let i1 = i; //make a copy for later loop.
        if(!counts.hasOwnProperty(c)){ //check that key doesn't exist
            counts[c] = 0; //create new key:value pair in counts for this letter
            while(i1<a.length){ //move forward through 'a' array looking for duplicates.
                if(c===a[i1]){ //if duplicate found,
                    counts[c]++; //then add to it's counts value.
                }
                i1++; //remember to actually move forward.
	        }
            if(counts[c]%2 != 0){ //is it odd?
                odd++;
                if(odd > 1){ //how many odds have we got now? let's just end this if we've got too many.
                    console.log('NO');
                    break;
                }
            }
        }
        if(a.length-1 == i){ //did we get to the end without maxing the odds? if so then the king has his key.
            console.log('YES');
        }
    }
} 