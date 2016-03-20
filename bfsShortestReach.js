//https://www.hackerrank.com/challenges/bfsshortreach
//just get through the input...
function processData(input) {
    'use strict';
    const lines = input.split('\r\n'); // well carriage return is new. \r.
    let nTests = lines.shift();
    let i = 0; // should bring us to the beginning of each test.
    while(nTests>0){
        let ne = lines[i].split(' '); //temp
        let nodes = parseInt(ne.shift()); //number of nodes
        let numEdges = parseInt(ne); //number of edges
        let startPos = lines[i+1+numEdges]; //starting position
        
        let edges =[];
        for(let a = i+1; a<=numEdges; a++){ //loop through each edge of current test.
            edges.push(lines[a]);
        }
        console.log(edges);
        i += numEdges+2; //increment to beginning of next test
        nTests--; //decrement tests
    }
} 