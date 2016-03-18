//https://www.hackerrank.com/challenges/bfsshortreach
//just get through the input...
function processData(input) {
    'use strict';
    const lines = input.split('\r\n'); // well carriage return is new. \r.
    let nTests = lines.shift();
    while(nTests>0){
        let i = 0;
        let edges = lines[i].split(' ');
        let nodes = edges.shift();
        
        for(let ai = i+1; ai<parseInt(edges)+1; ai++){
            
        }
        
        i += parseInt(edges)+2; //account for the first and last lines of the test
        nTests--;
    }
} 