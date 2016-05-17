//https://www.hackerrank.com/challenges/fibonacci-modified

function processData(input) {
    let arr = input.split(' ').map(Number);
    let a = arr[0];
    let b = arr[1];
    let n = arr[2]-2;
    
    function fibMod(first, second, final){
        let third = 0;
        while(final--){
            third = Math.pow(second, 2) + first;
            first = second;
            second = third;
        }
        return third;
    }
    console.log(fibMod(a,b,n));
} 