function processData(input) {
    var lines = input.split('\n'); // convert input lines into an array
    var t = lines[0]; //identify the first one as t
    for(i=1;i<=t;i++){ //our range
        var k = lines[i];
        var xCuts = Math.floor(k/2); //make sure our cuts are integers by rounding down and up for odd number cuts.
        var yCuts = Math.ceil(k/2);
        var chocolate = xCuts * yCuts; //caculate the chocolate so Silvia won't whine.
        console.log(chocolate); //print the answer within the loop so you get an answer for each case.
    }
} 