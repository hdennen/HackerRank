function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var sum = arr.reduce((a,b) => a+b); //sum an array.
    console.log(sum);

}