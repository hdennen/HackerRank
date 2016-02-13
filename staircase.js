function main() {
    var n = parseInt(readLine());
    var line = Array(n).join(' ')+"#"
    for(i=0;i<n;i++){
        console.log(line);
        line = line.substring(1);
        line += '#';
        }

}