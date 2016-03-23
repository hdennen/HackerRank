//https://www.hackerrank.com/challenges/bfsshortreach
//Using queue.js
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
        let visited = [startPos];
        let edges =[];
        
        for(let a = i+1; a<=i+numEdges; a++){ //fill array of edges.
            edges.push(lines[a].split(' ').map(Number));
        }
        let queue = new Queue();
        let level = 1;
        let subQueue = new Queue();
        queue.enqueue(startPos); //add start position to queue.
        while(!queue.isEmpty()){ //use whatever is at start of queue
            let n = queue.dequeue(); //start at beginning of queue.
            for(let edge of edges){ //this could be optimized by sanitizing edges array of used edges.
                let ni = edge.indexOf(n);
                if(ni == 1 || ni == 0){
                    let vie0 = visited.indexOf(edge[0]);
                    let vie1 = visited.indexOf(edge[1]);
                    if(ni == 1 && vie0 == -1){ //if contains n and isn't already visited.
                        visited.push(edge[0]); 
                        subQueue.enqueue(edge[0]);
                        distances[edge[0]] = level; //track which level we're on.
                    }else if(ni == 0 && vie1 == -1){
                        visited.push(edge[1]);
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

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});