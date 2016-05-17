//https://www.hackerrank.com/challenges/find-digits

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
 
        var arr = n.toString().split('').map(Number);
        var len = arr.length;
        var answer = 0;
        while(len--){
            if(n%arr[len] == 0){
                answer++;
            }
        }
        console.log(answer);
    }
}