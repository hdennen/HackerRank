//https://www.hackerrank.com/challenges/bigger-is-greater
function processData(input) {
    'use strict';
    const w = input.split('\n');
    const t = w.shift();
    
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
    
    for(let test of w){
        let l = test.length;
        let i = 0; //create here for scope.
        big: while(l--){
            i = l;
            let tL = test[l];
            while(i--){
                if(tL > test[i]){
                    test = stringSplice(test,l,1); //delete char
                    test = stringSplice(test,i,0,tL); //insert char
                    let subStrArr = test.substr(i+1).split(''); //generate substring to sort starting at insertion
                    if(subStrArr.length > 1){
                        let subStr = insertionSort(subStrArr).join('');
                        test = test.substring(0,i+1)+subStr;
                        console.log(test);
                    }else{
                        console.log(test);
                    }
                    //console.log(test);
                    break big;
                }
            }
            if(l === 0){
                console.log('no answer');
            }
        }
        let subStrArr = test.substr(i).split(''); //generate substring to sort starting at insertion
        insertionSort(subStrArr).join('');
    }
} 