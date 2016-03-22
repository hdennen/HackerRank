//https://www.hackerrank.com/challenges/bfsshortreach
//moves through queue and saves visited nodes, but still not counting distance.
function processData(input) {
    'use strict';
    const lines = input.split('\r\n'); // well carriage return is new. \r.
    let nTests = lines.shift();
    let i = 0; // should bring us to the beginning of each test.
    while(nTests>0){
        let visited = []; //the visited node distance.
        let queue = [];
        let answer = '';
        let ne = lines[i].split(' '); //temp
        let numNodes = parseInt(ne.shift()); //number of nodes
        let numEdges = parseInt(ne); //number of edges
        let startPos = parseInt(lines[i+1+numEdges]); //starting position
        let nodes = [];
        let c = 1;
        //create object of nodes and degrees of separation from start node.
        let edges =[];
        for(let a = i+1; a<=i+numEdges; a++){ //fill array of edges.
            edges.push(lines[a].split(' ').map(Number));
        }
        
        while(numNodes>0){ //create queue of nodes.
            nodes.push(c)
            c++;
            numNodes--;
        }
        nodes.splice(nodes.indexOf(startPos), 1); //remove start node from nodes
        
        queue.push(startPos); //add start position to queue.
        while(queue.length > 0){ //use whatever is at start of queue
            let n = queue[0];
            for(let edge of edges){ //this could be optimized by sanitizing edges array of used edges.
                if((edge.indexOf(n) == 1) && (nodes.indexOf(edge[0]) > -1)){
                   visited.push(edge[0]);
                   queue.push(edge[0]);
                }else if((edge.indexOf(n) == 0) && (nodes.indexOf(edge[1]) > -1)){
                   visited.push(edge[1]);
                   queue.push(edge[1]);
                } 
            }
            queue.shift();
        }

        console.log(visited);

        i += numEdges+2; //increment to beginning of next test
        nTests--; //decrement tests
    }
} 