function main() {
    var t = parseInt(readLine());
    var h = 1; //height
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        if(n%2===0){ //for even number seasons, whole years
            h = 1; //initial height
            y = n/2; //year is two seasons
            i = 0;
            while(i<y){ 
                h = h*2+1; //yearly growth
                i++;
            }
            console.log(h);
            
        } else { //for odd number seasons
            h = 1;
            y = (n-1)/2; //remove last season to get whole years
            i = 0;
            while(i<y){
                h = h*2+1;
                i++;
            }
            h = h*2; //add last season at the end
            console.log(h);
        }
    }
}