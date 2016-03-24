//https://www.hackerrank.com/challenges/quicksort2
//Recursionnnnn!!!!!!
function processData(input) {
    'use strict';
    const size = input.split('\n');
    const array = size.pop().split(' ').map(Number);
    
    let partition = function(arr){ //sort function.
        let p = arr[0];
        let len = arr.length;
        let left = [];
        let equal = [];
        let right = [];
        for(let i=0;i<len;i++){
            let c = arr[i];
            if(p>c){
                left.push(c);
            }else if(p<c){
                right.push(c);
            }else{
                equal.push(c);
            }
        }
        if(left.length>1){
            left = partition(left); //Recycle the left array. because this happens first, !!===> the smallest iteration will print first due to recursion. <===!!
            console.log(left.join(' ')); //and printing the joined array that comes out.
        }
        if(right.length>1){ //same as above for the right side.
            right = partition(right);
            console.log(right.join(' '));
        }
        let newArr = [];
        return newArr.concat(left,p,right); //making sure this spits out an array is crucial.
    }
    console.log(partition(array).join(' '));
} 