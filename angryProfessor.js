function main() {
    'use strict';
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]); //number of students
        var k = parseInt(n_temp[1]); //cancellation threshold
        var a = readLine().split(' ').map(Number); //array of arrival times
        //everything above here is just parsing input to variables with their readline function      
        let nOnTime = 0; //students on time.
        for(let i of a){
            if(i<1){
                nOnTime++;
            }
        }
        if(nOnTime<k){ //check threshold.
            console.log('YES');
        }else{
            console.log('NO');
        }      
    }
}