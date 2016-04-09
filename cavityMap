//https://www.hackerrank.com/challenges/cavity-map
function main() {
    var n = parseInt(readLine());
    var grid = [];
    for(var grid_i = 0; grid_i < n; grid_i++){
       grid[grid_i] = readLine().split('').map(Number);
    }
    for(var i=0;i<n;i++){
        if(i===0 || i===n-1){
            console.log(grid[i].join(''));
        }else{
            for(var a=1;a<n-1;a++){
                if(grid[i][a]>grid[i-1][a] && grid[i][a]>grid[i][a-1] && grid[i][a]>grid[i][a+1] && grid[i][a]>grid[i+1][a]){
                grid[i][a] = 'X';
                }
            }
            console.log(grid[i].join(''));
        }
    }
}