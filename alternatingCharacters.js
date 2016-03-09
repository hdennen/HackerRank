function processData(input) {
    'use strict';
    const cadabras = input.split('\n');
    const len = cadabras.shift(); //shift is nooiiiiicccceee.

    for(let abra of cadabras){ //for of loop to go thru each item value in the array
        let deletions = 0
        
        for(let i=0;i<abra.length;i++){
            if(abra.charAt(i) === abra.charAt(i+1)){ //just check if the next char is same
                deletions++; //and add it to the pile of deletions
            }
        }
        console.log(deletions);
    } 
} 