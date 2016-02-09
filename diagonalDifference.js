function main() {
    var n = parseInt(readLine());
    var a = [];
    var sumP = 0; //declare vars for diagonals primary
    var sumS = 0; //and secondary.
    var pos = n-1; //get final position in arrays.
    
    for(a_i = 0; a_i < n; a_i++){ //their voodoo to split input into a 2d array.
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    
    for(i=0;i<=n-1;i++){ //loop through array, note we can't use pos here because it decrements.
        sumP = sumP+a[i][i];
        sumS = sumS+a[i][pos];
        pos--;
    }
    diagDiff = Math.abs(sumP-sumS); //.abs for absolute sum.
    console.log(diagDiff);
}