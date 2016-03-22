//https://www.hackerrank.com/challenges/bfsshortreach
//moves through queue and saves visited nodes, but still not counting distance.
function processData(input) {
    'use strict';
    const lines = input.split('\r\n'); // well carriage return is new. \r.
    let nTests = lines.shift();
    let i = 0; // should bring us to the beginning of each test.
    while(nTests>0){
        let ne = lines[i].split(' '); //temp
        let numNodes = parseInt(ne.shift()); //number of nodes
        let numEdges = parseInt(ne); //number of edges
        let startPos = parseInt(lines[i+1+numEdges]); //starting position
        let level = 0;
        let distances = {}; //object to keep track what level each item in queue is on.
        let visited = [startPos];
        let queue = [];
        let edges =[];
        
        let nodesArr = [];
        let c = 1;
        while(numNodes>0){ //create queue of nodes.
            nodesArr.push(c)
            c++;
            numNodes--;
        }
        nodesArr.splice(nodesArr.indexOf(startPos), 1); //remove start node from nodes
        
        for(let a = i+1; a<=i+numEdges; a++){ //fill array of edges.
            edges.push(lines[a].split(' ').map(Number));
        }
        queue.push(startPos); //add start position to queue.
        let counter = 0;
        while(queue.length > 0){ //use whatever is at start of queue
            let n = queue[0];
             //counts queue additions to keep track of levels.
            if(counter == 0){
                level++;
            }else{
                counter--;
            }
            for(let edge of edges){ //this could be optimized by sanitizing edges array of used edges.
                let ni = edge.indexOf(n);
                let vie0 = visited.indexOf(edge[0]);
                let vie1 = visited.indexOf(edge[1]);
                
                if(ni == 1 && vie0 == -1){ //if contains n and isn't already visited.
                    visited.push(edge[0]);
                    queue.push(edge[0]);
                    
                    if(!distances[level]){
                        distances[level] = [];
                        distances[level].push(edge[0]);
                    }else{
                        distances[level].push(edge[0]);
                    }
                    
                    counter++;
                    
                }else if(ni == 0 && vie1 == -1){
                    visited.push(edge[1]);
                    queue.push(edge[1]);
                    
                    if(!distances[level]){
                        distances[level] = [];
                        distances[level].push(edge[1]);
                    }else{
                        distances[level].push(edge[1]);
                    }
                    counter++;
                }
                    
            }
            queue.shift();
        }

        let answer = ''; //get the answer ready.
        
        for (let n of nodesArr){ //loop through nodes.
            for(let l in distances){ //for each node, loop through distances object.
                if(distances[l].indexOf(n) == -1){
                    answer += '-1 ';
                }
                else{
                    let trueDistance = l*6;
                    answer += trueDistance+' ';
                }
            }
        }

        console.log(answer);
        
        i += numEdges+2; //increment to beginning of next test
        nTests--; //decrement tests
    }
} 