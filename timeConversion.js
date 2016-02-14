function main() {
    var time = readLine();
    var day = time.slice(-2); //grab AM or PM
    var hh = Number(time.slice(0,2)); //hours, remember to make it a number
    var mTime = time.slice(0,8); //time without AM or PM
    
    if(day ==='PM' && hh === 12){
        //be cool.
    } else if(day === 'PM'){ //obvious
        hh = hh+12; //add 12 to hours
        mTime = hh+time.slice(2,8); //fix military time.
    } else if(hh===12){
        hh = hh-12;
        mTime = '0'+hh+time.slice(2,8); //replace 12 with 0 for military time AM.
    }
    console.log(mTime);
}  