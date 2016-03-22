//https://www.hackerrank.com/challenges/bfsshortreach
//works for edges that begin at start position but doesn't find min distance properly.
function processData(input) {
    'use strict';
    const lines = input.split('\r\n'); // well carriage return is new. \r.
    let nTests = lines.shift();
    let i = 0; // should bring us to the beginning of each test.
    while(nTests>0){
        let visited = [];
        let answer = '';
        let ne = lines[i].split(' '); //temp
        let numNodes = parseInt(ne.shift()); //number of nodes
        let numEdges = parseInt(ne); //number of edges
        let startPos = parseInt(lines[i+1+numEdges]); //starting position
        let nodes = []
        let c = 1;
        while(numNodes>0){ //create queue of nodes.
            nodes.push(c)
            c++;
            numNodes--;
        }
        nodes.splice(nodes.indexOf(startPos), 1);//remove start node from nodes

        let edges =[];
        for(let a = i+1; a<=i+numEdges; a++){ //fill array of edges.
            edges.push(lines[a].split(' ').map(Number));
        }
        for(let edge of edges){
            if((edge.indexOf(startPos) > -1) && (nodes.indexOf(edge[0]) > -1)){
               visited.push(edge[0]);
               
            }else if((edge.indexOf(startPos) > -1) && (nodes.indexOf(edge[1]) > -1)){
               visited.push(edge[1])
               
            } 
        }
        
        for(let n of nodes){
            if(visited.indexOf(n) > -1){
                answer += '6 ';
            }else{
                answer += '-1 ';
            }
        }
        console.log(answer);
        i += numEdges+2; //increment to beginning of next test
        nTests--; //decrement tests
    }
} 