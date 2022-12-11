/*
Find the signal strength during the 20th, 60th, 100th, 140th, 180th, and 220th cycles. 
What is the sum of these six signal strengths?


*/


/* First challenge*/

let today1 = document.getElementById("a").innerText;
let todayArr1 = today1.split("\n");
let sum1 = 0;
let reg = [1];

let count = 0;
for(let i = 0; i < todayArr1.length-1; i++){
    let line = todayArr1[i].split(" ");
    if(line.length > 1){
        reg[count+1] = reg[count];
        reg[count+2] = reg[count]+parseInt(line[1]);
        count += 2;
    }else{
        reg[count+1] = reg[count];
        count++;
    }
}

console.log(reg[19]*20+reg[59]*60+reg[99]*100+reg[139]*140+reg[179]*180+reg[219]*220);



/* 
part two 

40 * 6 

*/
let result = ""
for(let i = 0; i < 6; i++){
    for(let j = 0; j < 40; j++){
        if(j==reg[i*40+j] || j==reg[i*40+j]-1 || j == reg[i*40+j]+1){
            result += "#"
        }else{
            result += "."
        }

    }   
    result += "\n"
}

console.log(result);