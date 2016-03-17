function processData(input) {
    'use strict';
    const queries = input.split('\n');
    const lvArr = queries.shift().split(' ').map(Number);
    const q = queries.shift();
    const L = lvArr[0];
    const H = Math.sqrt((L*L)+(L*L));//hypotenuse of squares.
    const s1 = lvArr[1];
    const s2 = lvArr[2];
    const dS = Math.abs(s1-s2); //difference is speed.
    for(let Qi of queries){ //area to check time for.
        let l = Math.sqrt(Qi); //side length
        let QiH = Math.sqrt((l*l)+(l*l)); //hypotenuse of Qi, difference between this and main H is distance.
        let time = Math.abs((H-QiH)/dS);
        console.log(time);
    }
} 