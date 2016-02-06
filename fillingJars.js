function processData(input) {
    var inputArr = input.split('\n'); //dice the input into an array by line breaks
    var numJars = inputArr[0].split(' ').map(Number)[0]; //grab the first item in array, split into array, make it integers, grab that first item for num jars.
    var mOps = inputArr[0].split(' ')[1]; //same as above but different for operations.
    var sumArr = [];
    
    for(i=1;i<=mOps;i++){ //for each operation
        var a = inputArr[i].split(' ').map(Number)[0]; //grab a as an integer with map
        var b = inputArr[i].split(' ').map(Number)[1]; //grab b 
        var k = inputArr[i].split(' ').map(Number)[2]; //grab c.
        sumArr.push((b-a+1)*k); // do some math and push the result into the array.
    }
    var sumTotal = sumArr.reduce((a,b) => a+b); // add up all items in array with reduce in arrow syntax.
    var avg = sumTotal / numJars;
    console.log(Math.floor(avg)); //remember to round down with floor!
} 