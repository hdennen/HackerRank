//https://www.hackerrank.com/challenges/bfsshortreach
//100% working. for of is not as fast as cached regular for loop.
function Queue(){var a=[],b=0;this.getLength=function(){return a.length-b};this.isEmpty=function(){return 0==a.length};this.enqueue=function(b){a.push(b)};this.dequeue=function(){if(0!=a.length){var c=a[b];2*++b>=a.length&&(a=a.slice(b),b=0);return c}};this.peek=function(){return 0<a.length?a[b]:void 0}};

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
        let edges =[];
        
        for(let a = i+1; a<=i+numEdges; a++){ //fill array of edges.
            edges.push(lines[a].split(' ').map(Number));
        }
        let queue = new Queue();
        let level = 1;
        let subQueue = new Queue();
        let len = edges.length;
        queue.enqueue(startPos); //add start position to queue.
        while(!queue.isEmpty()){ //use whatever is at start of queue
            let n = queue.dequeue(); //start at beginning of queue.
            for(let i = 0; i < len; i++){ //trying cached for loop instead of for of.
                let edge = edges[i];
                let ni = edge.indexOf(n);
                if(ni == 1 || ni == 0){
                    let vie0 = distances[edge[0]] === undefined;
                    let vie1 = distances[edge[1]] === undefined;
                    if(ni == 1 && vie0 == true){ //if contains n and isn't already visited.
                        subQueue.enqueue(edge[0]);
                        distances[edge[0]] = level; //track which level we're on.
                    }else if(ni == 0 && vie1 == true){
                        subQueue.enqueue(edge[1]);
                        distances[edge[1]] = level; //track which level we're on.
                    }
                }
            }
            if(!subQueue.isEmpty() && queue.isEmpty()){
                level++;
                queue = subQueue;
                subQueue = new Queue(); //had to clear it here, otherwise it got cleared improperly and missed certain numbers. weird.
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