function processData(input) {
    var inputArr = input.split('\n');
    var t = inputArr[0];
    for (i=1;i<=t;i++){
        var dudes = inputArr[i];
        var shakes = (dudes/2)*(dudes-1);
        console.log(shakes);
    }
} 