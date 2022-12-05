/*
Stacks separeted by ' '
*/


/* First challenge*/

let today1 = document.getElementById("a").innerText;
let todayArr1 = today1.split("\n");

let sum1 = 0;

let boxes = []
let box1 = []
let box2 = []
let box3 = []
let box4 = []
let box5 = []
let box6 = []
let box7 = []
let box8 = []
let box9 = []
boxes[0] = box1;
boxes[1] = box2;
boxes[2] = box3;
boxes[3] = box4;
boxes[4] = box5;
boxes[5] = box6;
boxes[6] = box7;
boxes[7] = box8;
boxes[8] = box9;

todayArr1.forEach(item => {
    if(item[0] == "["){
        count = 0;
        let items = item.split(" ");
        for(let i = 0; i < items.length; i++){
            if(items[i] == ""){
                i += 3;
            }else{
                boxes[count].push(items[i]);
            }
            count++;
        }
    }else if(item[0] == " "){
        for(let i =0; i < boxes.length; i++){
            boxes[i].reverse();
        }
    }else if(item[0] == ""){
    }else{
        let items = item.split(" ");
        amount = parseInt(items[1]);
        console.log(amount);
        fromBox = parseInt(items[3])-1;
        toBox = parseInt(items[5])-1;
        tempArr = []
        for(let i= 0; i < amount; i++){
            tempArr.push(boxes[fromBox].pop())
        }
        for(let i= 0; i < amount; i++){
            boxes[toBox].push(tempArr.pop())
        }
    }
});
console.log(boxes[0][box1.length-1]+boxes[1][box2.length-1]+boxes[2][box3.length-1]+boxes[3][box4.length-1]+boxes[4][box5.length-1]+boxes[5][box6.length-1]+boxes[6][box7.length-1]+boxes[7][box8.length-1]+boxes[8][box9.length-1])

/* second challenge */
