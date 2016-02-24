function processData(input) {
    var lines = input.split('\n');
    var t = lines[0];
    var rows = lines.length-1;
    var m = 1234567;
    
    for(i=2;i<=rows;i+=2){
        var routes = lines[i].split(' ').map(Number).reduce((a, b) => a%m * b%m); // grabs Ti routes, splits into array, .reduce to multiply items in array.
        console.log(routes);
    }
} 