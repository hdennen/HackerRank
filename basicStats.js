//https://www.hackerrank.com/contests/intro-to-statistics/challenges/basic-statistics-warmup-2
function processData(input) {
    'use strict';
    const lines = input.split('\n');
    const n = lines.shift();
    const nums = lines[0].split(' ').map(Number);
    nums.sort((a,b)=>a-b);
    
    let mean = nums.reduce((a,b) => a+b)/n;
    function getMedian(n, nums){
        let median = 0;
        if(n%2 === 0){
            let a = n/2;
            let b = a-1;
            median = (nums[a]+nums[b])/2;
        }else{
            let a = Math.floor(n/2);
            median = nums[a];
        }
        return median;
    }
    function getMode(){
        
    }
    function compressArray(original) {
      var compressed = [];
        let nMost = original[0];
        let top = 1;
        // make a copy of the input array
        var copy = original.slice(0);
        // first loop goes over every element
        for (var i = 0; i < original.length; i++) {
            var myCount = 0;	
            // loop over every element in the copy and see if it's the same
            for (var w = 0; w < copy.length; w++) {
                if (original[i] == copy[w]) {
                    // increase amount of times duplicate is found
                    myCount++;
                    // sets item to undefined
                    delete copy[w];
                }
            }
            if (myCount > 0) {
                let a = new Object();
                a.value = original[i];
                a.count = myCount;
                compressed.push(a);
                if(myCount > top){
                    nMost = original[i];
                    top = myCount;
                }
            }
        }
        //return compressed;
        return nMost;
    };
    
    function standardDev(mean, nums){
        let sqrArr = []
        for(let v of nums){
            let x = (v - mean);
            x *=x;
            sqrArr.push(x);
        }
        let sumArr = sqrArr.reduce((a,b)=>a+b);
        let sDev = Math.sqrt(sumArr/n);
        return sDev;
    }
    
    console.log(mean);
    console.log(getMedian(n, nums));
    console.log(compressArray(nums));
    console.log(standardDev(mean,nums));
} 