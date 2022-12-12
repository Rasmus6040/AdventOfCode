/*


*/


/* First challenge*/

// Setup
let today1 = document.getElementById("a").innerText;
let todayArr1 = today1.split("\n");

let best = 99999;
let start = [];
let end = "E";
let maze = [];

for(let i = 0; i < todayArr1.length-1; i++){
    let row = [];
    for(let j = 0; j < todayArr1[i].length; j++){
        if(todayArr1[i][j] == "S"){
            // start = [i, j];
            start.push([i, j]);
            row[j] = 0;
        } else if(todayArr1[i][j] == "E"){
            end = [i, j];
            row[j] = 100;
        }else if(todayArr1[i][j] == "a"){
            start.push([i, j]);
            row[j] = 0;            
        }
        else{
            row[j] = todayArr1[i][j].charCodeAt(0) - 97;
        }
    }
    maze[i] = row;
}

for(startPos of start){
    let maze = [];

    for(let i = 0; i < todayArr1.length-1; i++){
        let row = [];
        for(let j = 0; j < todayArr1[i].length; j++){
            if(todayArr1[i][j] == "S"){
                // start = [i, j];
                row[j] = 0;
            } else if(todayArr1[i][j] == "E"){
                end = [i, j];
                row[j] = 100;
            }else{
                row[j] = todayArr1[i][j].charCodeAt(0) - 97;
            }
        }
        maze[i] = row;
    }
    let choices = [];

    maze[startPos[0]][startPos[1]] = 9999;
    if(startPos[0] >= 1 && maze[startPos[0]-1][startPos[1]] <= 1){
        choices.push([[startPos[0]-1, startPos[1]], 1, maze[startPos[0]-1][startPos[1]]]);
        maze[startPos[0]-1][startPos[1]] = 9999;
    }
    if(startPos[1] >= 1 && maze[startPos[0]][startPos[1]-1] <= 1){
        choices.push([[startPos[0],startPos[1]-1], 1, maze[startPos[0]][startPos[1]-1]]);
        maze[startPos[0]][startPos[1]-1] = 9999;
    }
    if(startPos[0] <= 39 && maze[startPos[0]+1][startPos[1]] <= 1){
        choices.push([[startPos[0]+1,startPos[1]], 1, maze[startPos[0]+1][startPos[1]]]);
        maze[startPos[0]+1][startPos[1]] = 9999;
    }
    if(startPos[1] <= 59 && maze[startPos[0]][startPos[1]+1] <= 1){
        choices.push([[startPos[0],startPos[1]+1], 1, maze[startPos[0]][startPos[1]+1]]);
        maze[startPos[0]][startPos[1]+1] = 9999;
    }
    while (choices.length != 0) {
        let current = choices.shift();
        let currenty = current[0][0];
        let currentx = current[0][1];
        let currentStep = current[1];
        let currentValue = current[2];
        if(currenty == end[0] && currentx-1 == end[1]){
            if(best > currentStep+1){
                best = currentStep+1;
            }
            console.log(currentStep+1)
            break;
        }
        if(currenty >= 1 && maze[currenty-1][currentx]-currentValue <= 1){
            // console.log([currenty-1, currentx], currentStep+1, maze[currenty-1][currentx]);
            choices.push([[currenty-1, currentx], currentStep+1, maze[currenty-1][currentx]]);
            maze[currenty-1][currentx] = 9999;
        }
        if(currentx >= 1 && maze[currenty][currentx-1]-currentValue <= 1){
            // console.log([currenty, currentx-1], currentStep+1, maze[currenty][currentx-1]);
            choices.push([[currenty, currentx-1], currentStep+1, maze[currenty][currentx-1]]);
            maze[currenty][currentx-1] = 9999;
        }
        if(currenty <= 39 && maze[currenty+1][currentx]-currentValue <= 1){
            // console.log([currenty+1, currentx], currentStep+1, maze[currenty+1][currentx]);
            choices.push([[currenty+1, currentx], currentStep+1, maze[currenty+1][currentx]]);
            maze[currenty+1][currentx] = 9999;
        }
        if(currentx <= 59 && maze[currenty][currentx+1]-currentValue <= 1){
            // console.log([currenty, currentx+1], currentStep+1, maze[currenty][currentx+1])
            choices.push([[currenty, currentx+1], currentStep+1, maze[currenty][currentx+1]]);
            maze[currenty][currentx+1] = 9999;
        }
    }
}





console.log(best)