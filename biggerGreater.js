//https://www.hackerrank.com/challenges/bigger-is-greater
function processData(input) {
    'use strict';
    const w = input.split('\n'); //strings
    const t = w.shift(); //tests
    
    function stringSplice(source, index, deleteChars, insert) { //handy splice function for strings.
        insert = insert || '';
        return source.slice(0, index) + insert + source.slice(index + Math.abs(deleteChars));
    }
    
    function insertionSort(arr){ //insertion sort function
        let e = 0;
        let prev = 0;
        let shiftCount = 0;
        let len = arr.length
        for(let i = 1; i<len; i++){
            e = arr[i];
            let j = i-1;
            while(prev >= 0 && arr[j]>e){
                arr.splice(j+1,1,arr[j]); //copies previous into current position.
                shiftCount++;
                j--;
            }
            arr.splice(j+1,1,e);
        }
        return arr;
    }
    
    for(let test of w){// loop through tests.
        let l = test.length;
        let len = test.length;
        big: while(l--){ //start at end
            let j = l-1;
            if (test[j] < test[l]){
                let p = test[j];
                while(j++){ //turn around
                    if(test[j]<p){//swap j-1 with p
                        test = stringSplice(test,l-1,1,test[j-1]); //splice smallest larger into p position.
                        test = stringSplice(test,j-1,1,p); //splice p into smallest larger position.
                        break big;
                    }
                    if(j === len-1){
                        break big;
                    }
                }
            }
        }
        //sort from l
        
        if(l === 0){
            console.log('no answer');
        }
        let subStrArr = test.substr(l).split(''); //generate substring to sort starting at insertion
        test = stringSplice(test,l,len-l); //cut off the end we're sorting
        test = test+subStrArr.sort().join('');
        console.log(test);
    }
}