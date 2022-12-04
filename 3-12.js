/*
two compartments
Every item is a lowercase or uppercase letter
first half is one compartment second half is second compartment

Lowercase item types a through z have priorities 1 through 26.
Uppercase item types A through Z have priorities 27 through 52.
*/


/* First challenge*/

let today1 = document.getElementById("a").innerText;
let todayArr1 = today.split("\n");

let sum1 = 0;


todayArr1.forEach(item => {
    let firsthalf = item.substring(0, item.length/2);
    let lasthalf = item.substring(item.length/2, item.length);
    for(let i = 0; i < lasthalf.length; i++){
        if(firsthalf.indexOf(lasthalf[i]) != -1){sum1+=getNumberOfChar(lasthalf[i]); break;}
    }

});

/* second challenge */
let today = document.getElementById("a").innerText;
let todayArr = today.split("\n");
let sum = 0;
let count = 0;
let break1 = false;

for(let j = 0; j < todayArr.length-1; j += 3){
    for(let i = 0; i < todayArr[j+1].length; i++){

        if(todayArr[j].indexOf(todayArr[j+1][i]) != -1){
            if((todayArr[j+2].split(todayArr[j+1][i])).length > 1){
                sum += getNumberOfChar(todayArr[j+1][i]); break1 = true; break;
            }
        }
    }
    if(!break1) console.log(j + " ??? no match")
    break1 = false;
}


function getNumberOfChar(char){
    if(char.charCodeAt(0) < 97){
        return 27+char.charCodeAt(0)-65
    }else{
        return 1+char.charCodeAt(0)-97
    }
}


/*
A = 65 
a = 97

*/

console.log(sum);
    