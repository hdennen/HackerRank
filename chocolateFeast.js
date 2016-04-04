function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var c = parseInt(n_temp[1]);
        var m = parseInt(n_temp[2]);
        var chocs = Math.floor(n/c);
        var wraps = Math.floor(n/c);
        var freeChocs = 0;
        while(wraps>=m){
            freeChocs += Math.floor(wraps/m);
            wraps-=freeChocs*m;
            wraps+=freeChocs;
        }
        var totalChocs = chocs + freeChocs;
        console.log(totalChocs);
    }
}