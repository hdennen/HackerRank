function processData(input) {
    'use strict';
    const arr = input.split('\n'); //array of input lines.
    const t = parseInt(arr.shift()); //first line which also removes it from arr.
    
    for(let i=0;i<arr.length;i+=2){ //loop every other item.
        let a = arr[i].split(''); //grab current item.
        let b = arr[i+1].split(''); //grab subsequent item.
        mainloop: for(let valueA of a){ //loop through each letter of item a.
            for(let valueB of b){ //loop through each letter of item b while holding item a.
                if(valueA === valueB){ //compare item a with item b.
                    console.log('YES'); //if the match then print yes,
                    break mainloop; //and break the loop labelled 'mainloop' because we can stop here.
                }
            }
            if(a.length-1 == a.indexOf(valueA)){ //if we've made it to the end without a match print no.
                console.log('NO');
            }
        }
    }
}