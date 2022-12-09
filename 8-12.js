/*
Stacks separeted by ' '
*/


/* First challenge*/

let today1 = document.getElementById("a").innerText;
let todayArr1 = today1.split("\n");

let sum1 = 2*(todayArr1.length-1)+2*todayArr1[1].length-4;
let seentrees = [];

for(let i = 1; i < todayArr1.length-2; i++){
    seentrees[i] = [];
    for(let j = 1; j < todayArr1[i].length -1; j++){
        let seen = true;
        let highest = 0;
        for(k = 0; k <= j; k++){
            if (highest < parseInt(todayArr1[i][k])) {
                highest = parseInt(todayArr1[i][k]);
                seen = true;
            }else{
                seen = false;
            }
        }
        if (!seen){
            seen = true;
            highest = 0;
            for(k = todayArr1[i].length-1; k >= j ; k--){
                if (highest < parseInt(todayArr1[i][k])) {
                    highest = parseInt(todayArr1[i][k]);
                    seen = true;
                }else{
                    seen = false;
                }
            }
        }
        if (!seen){
            seen = true;
            highest = 0;
            for(k = 0; k <= i; k++){
                if (highest < parseInt(todayArr1[k][j])) {
                    highest = parseInt(todayArr1[k][j]);
                    seen = true;
                }else{
                    seen = false;
                }
            }
        }
        if (!seen){
            seen = true;
            highest = 0;
            for(k = todayArr1.length-2; k >= i; k--){
                if (highest < parseInt(todayArr1[k][j])) {
                    highest = parseInt(todayArr1[k][j]);
                    seen = true;
                }else{
                    seen = false;
                }
            }
        }
        seentrees[i][j] = false;
        if(seen){
            seentrees[i][j] = true;
            sum1++;
        }
    }
}
console.log(sum1);


/* part two */

let today = document.getElementById("a").innerText;
let todayArr = today.split("\n");

let sum = 0;
let seentrees1 = [];

for(let i = 1; i < todayArr.length-2; i++){
    seentrees1[i] = [];
    for(let j = 1; j < todayArr[i].length-1; j++){
        let senic = 1;
        let highest = parseInt(todayArr[i][j]);
        let count = 0;
        for(k = j-1; k >= 0; k--){
            if (highest <= parseInt(todayArr[i][k])) {
                count++;
                break;
            }else{
                count++;
            }
        }
        senic *= count;
        count = 0;
        for(k = j+1; k < todayArr[i].length; k++){
            if (highest <= parseInt(todayArr[i][k])) {
                count++;
                break;
            }else{
                count++;
            }
        }
        senic *= count;
        count = 0;
        for(k = i-1; k >= 0; k--){
            if (highest <= parseInt(todayArr[k][j])) {
                count++;
                break;
            }else{
                count++;
            }
        }
        senic *= count;
        count = 0;
        for(k = i+1; k < todayArr.length-1; k++){
            if (highest <= parseInt(todayArr[k][j])) {
                count++;
                break;
            }else{
                count++;
            }
        }
        senic *= count;
        if(senic > sum){
            sum = senic;
            console.log("["+i+"]["+j+"]")
        }
        seentrees1[i][j] = senic;
    }
}
console.log(sum);
