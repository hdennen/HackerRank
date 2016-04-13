//https://www.hackerrank.com/challenges/find-median
function processData(input) {
    'use strict';
    const len = input.split('\n');
    const arr = len.pop().split(' ').map(Number);
    const h = Math.floor(len[0]/2);
    
    let partition = function(arr, lo, hi){//splits array in half based on high and low ends of array.
        let p = arr[hi]; //top of (sub)array
        let i = lo; //bottom of (sub)array.
        for(let j = lo; j<hi; j++){ //loop upward from low index to separate items into lower half subarray.
            if (arr[j] <= p){ //check for items lower than current pivot.
                //stick located 'lower than p' at beginning of lower half subarray.
                let aj = arr[j]; //save item at j to variable for splicing.
                arr.splice(j,1,arr[i]); //delete item at j and insert item from i.
                arr.splice(i,1,aj); //delete item at i and insert saved item from j.
                i++; //increment i to establish new top of subarray after splicing.
            }
        }
        //swap top of lower subarray with pivot to effectively complete the halving.
        arr.splice(hi,1,arr[i]);
        arr.splice(i,1,p);
        return i; //return i so we have a pivot point for recursive sort.
    }
    let quickSort = function(arr, lo, hi){
        if(lo == hi){ 
            console.log(arr[lo]);
        }
        if(lo < hi){ //only so long as something still isn't sorted.
            let p = partition(arr, lo, hi); //grab latest low index.
            if(p===h){
                console.log(arr[p]);
            }else if(p<h){
                quickSort(arr, p + 1, hi); //recursively call again for top partition.
            }else if(p>h){
                quickSort(arr, lo, p - 1); //recursively call again for bottom partition.
            }
        }
    }
    quickSort(arr, 0, len-1);
} 