function processData(input) {
    var arr = input.split('\n');//each line into array
    var s = []; //strings array
    var r = []; //reversed strings array
    var sn = ''; //string n
    var rn = ''; //reverse string n
    for(i=1;i<arr.length;i++){ //fill the string arrays
        s.push(arr[i]);
        r.push(arr[i].split('').reverse().join(''));
        
        sn = s[s.length-1]; //the most recent item in the array, essentially what just got pushed above.
        rn = r[r.length-1]; //ditto for the reverse strings array
        var x = 0;
        while(x < sn.length-1){
            if(Math.abs((sn.charCodeAt(x+1) - sn.charCodeAt(x))) != Math.abs((rn.charCodeAt(x+1) - rn.charCodeAt(x)))){
                console.log('Not Funny');
                break;
            }else if(x<sn.length-2){
                x++;
            }else {
                console.log('Funny');
                break;
            }
        }
    }
}