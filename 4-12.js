/*
Every section has Uid
each elf has a range 

Overlap

How many pairs fully overlap?

234
3

*/


/* First challenge*/

let today1 = document.getElementById("a").innerText;
let todayArr1 = today1.split("\n");

let sum1 = 0;


todayArr1.forEach(item => {
    if(item == "") return;
    let atom = item.split(",");
    let atom1interval = atom[0].split("-");
    let atom2interval = atom[1].split("-");
    let start1 = parseInt(atom1interval[0]);
    let end1 = parseInt(atom1interval[1]);
    let start2 = parseInt(atom2interval[0]);
    let end2 = parseInt(atom2interval[1]);

    if(start1 <= start2 && end2 <= end1){
        sum1++;
        console.log("case 1: ");
        console.log(atom)

    }else if(start2 <= start1 && end1 <= end2){
        sum1++
        console.log("case 2: ");
        console.log(atom)
    }
});

/* second challenge */

let today = document.getElementById("a").innerText;
let todayArr = today.split("\n");

let sum = 0;


todayArr.forEach(item => {
    if(item == "") return;
    let atom = item.split(",");
    let atom1interval = atom[0].split("-");
    let atom2interval = atom[1].split("-");
    let start1 = parseInt(atom1interval[0]);
    let end1 = parseInt(atom1interval[1]);
    let start2 = parseInt(atom2interval[0]);
    let end2 = parseInt(atom2interval[1]);

    if(start1 <= start2 && end1 >= start2){
        sum++;
    }else if(start2 <= start1 && end2 >= start1){
        sum++
    }else if(start1 <= start2 && end2 <= end1){
        sum++;

    }else if(start2 <= start1 && end1 <= end2){
        sum1++
    }
});