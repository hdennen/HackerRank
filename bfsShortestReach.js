//https://www.hackerrank.com/challenges/bfsshortreach
//moves through queue and saves visited nodes, but still not counting distance.
function processData(input) {
    'use strict';
    const lines = input.split('\n'); // the invisible carriage return: "\r". wtf?
    let nTests = lines.shift();
    let i = 0; // should bring us to the beginning of each test.
    while(nTests>0){
        let ne = lines[i].split(' '); //temp
        let numNodes = parseInt(ne.shift()); //number of nodes
        let numEdges = parseInt(ne); //number of edges
        let startPos = parseInt(lines[i+1+numEdges]); //starting position
        
        let distances = {}; //object to keep track what level each item in queue is on.
        let visited = [startPos];
        let edges =[];
        
        for(let a = i+1; a<=i+numEdges; a++){ //fill array of edges.
            edges.push(lines[a].split(' ').map(Number));
        }
        let queue = [];
        let level = 1;
        queue.push(startPos); //add start position to queue.
        while(queue.length > 0){ //use whatever is at start of queue
            let n = queue[0];
            let subQueue = [];
            for(let edge of edges){ //this could be optimized by sanitizing edges array of used edges.
                let ni = edge.indexOf(n);
                let vie0 = visited.indexOf(edge[0]);
                let vie1 = visited.indexOf(edge[1]);
                
                if(ni == 1 && vie0 == -1){ //if contains n and isn't already visited.
                    visited.push(edge[0]);
                    subQueue.push(edge[0]);
                    
                    distances[edge[0]] = level;
                    
                }else if(ni == 0 && vie1 == -1){
                    visited.push(edge[1]);
                    subQueue.push(edge[1]);
                    
                    distances[edge[1]] = level;
                }
            }
            queue.shift();
            if(subQueue.length > 0 && queue.length == 0){
                    level++;
                    queue = queue.concat(subQueue);
                }
        }
        let nodesArr = [];
        let c = 1;
        while(numNodes>0){ //create queue of nodes.
            nodesArr.push(c)
            c++;
            numNodes--;
        }
        nodesArr.splice(nodesArr.indexOf(startPos), 1); //remove start node from nodes
        
        let answer = ''; //get the answer ready.
        //to-do fix this.
        for (let n of nodesArr){ //loop through nodes.
            if(n in distances){
                answer += distances[n]*6+' ';
            }else{
                answer += '-1 ';
            }
        }
        console.log(answer);
        
        i += numEdges+2; //increment to beginning of next test
        nTests--; //decrement tests
    }
} 