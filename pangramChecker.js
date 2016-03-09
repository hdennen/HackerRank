function processData(input) {
    var blub = input.toLowerCase().replace(/\s/g, '').split(''); //drop case, remove spaces, and make it an array.
    var adub = ''; //initialize empty string for later.
    for(i=0;i<blub.length;i++){ //loop through input string without spaces.
        if(adub.indexOf(blub[i])=== -1){ //check that adub string does not have the character we're on. note, letters of diff case are diff char.
            adub += blub[i]; //add it to the adub string
        }
    }
    if(adub.length == 26){ //if the alphabet made it into adub then it's 26 and a pangram.
        console.log('pangram');
    }else { //otherwise it's not.
        console.log('not pangram');
    }
} 