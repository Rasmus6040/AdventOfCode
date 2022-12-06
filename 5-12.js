/*
Stacks separeted by ' '
*/


/* First challenge*/

let today1 = document.getElementById("a").innerText;
//let todayArr1 = today1.split("\n");

let sum1 = 0;

for(let i = 0; i< today1.length-4; i++){
    let a = today1.substring(i, i+4);
    if(a[0] != a[1] && 
       a[0] != a[2] &&
       a[0] != a[3] &&
       a[1] != a[2] && 
       a[1] != a[3] &&
       a[2] != a[3] 
        ){
            console.log(sum1+4);
            break;
        }else{
            sum1++
        }
}
/* second challenge */


let today = document.getElementById("a").innerText;
//let todayArr1 = today1.split("\n");

let sum = 0;


for(let i = 0; i< today.length-14; i++){
    let a = today.substring(i, i+14);
    let asort = a.split("").sort();
    let uniqueChars = [...new Set(asort)];
    if(uniqueChars.length == 14){
        console.log(i+14)
        break;
    }

}