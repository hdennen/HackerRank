//https://www.hackerrank.com/challenges/flipping-bits

function processData(input) {
    let inArr = input.split('\n').reverse();
    let t = inArr.pop();
    
    function toBin(nMask) { //binary conversion black magic
      for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32;
           nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
      return sMask;
    }

    while(t--){
        let x = toBin(inArr[t]).split('').map(Number);
        
        let bits = 32;
        while(bits--){
            if(x[bits] == 0){
                x[bits] = 1;
            }else{
                x[bits] = 0;
            }
        }
        let y = parseInt(x.join(''), 2);
        console.log(y);
    }
} 