/*
Stacks separeted by ' '
*/


/* First challenge*/

let today1 = document.getElementById("a").innerText;
let todayArr1 = today1.split("\n");
let sum1 = 0;
let positionHead = [200, 200];
let positionBody1 = [200, 200];
let positionBody2 = [200, 200];
let positionBody3 = [200, 200];
let positionBody4 = [200, 200];
let positionBody5 = [200, 200];
let positionBody6 = [200, 200];
let positionBody7 = [200, 200];
let positionBody8 = [200, 200];
let positionTail = [200, 200];
let body = [positionHead, positionBody1, positionBody2, positionBody3, positionBody4, positionBody5, positionBody6, positionBody7, positionBody8, positionTail]
let pos = [];



function posTailx(){return positionTail[1];}
function posTaily(){return positionTail[0];}

function posBodyx(body1){return body1[1];}
function posBodyy(body1){return body1[0];}

function posHeadx(){return positionHead[1];}
function posHeady(){return positionHead[0];}

function setPosBodyx(body1, x){body1[1] += x;}
function setPosBodyy(body1, y){body1[0] += y;}

function setPosHeadx(x){positionHead[1] += x;}
function setPosHeady(y){positionHead[0] += y;}

function move(i){
    if(posBodyx(body[i]) < posBodyx(body[i+1])-1){
        setPosBodyx(body[i+1], -1)
        if(posBodyy(body[i]) < posBodyy(body[i+1])){
            setPosBodyy(body[i+1], -1);
        }else if(posBodyy(body[i]) > posBodyy(body[i+1])){
            setPosBodyy(body[i+1], 1);
        }
    }
    if(posBodyx(body[i]) > posBodyx(body[i+1])+1){
        setPosBodyx(body[i+1], 1)
        if(posBodyy(body[i]) < posBodyy(body[i+1])){
            setPosBodyy(body[i+1], -1);
        }else if(posBodyy(body[i]) > posBodyy(body[i+1])){
            setPosBodyy(body[i+1], 1);
        }
    }
    if(posBodyy(body[i]) < posBodyy(body[i+1])-1){
        setPosBodyy(body[i+1], -1)
        if(posBodyx(body[i]) < posBodyx(body[i+1])){
            setPosBodyx(body[i+1], -1);
        }else if(posBodyx(body[i]) > posBodyx(body[i+1])){
            setPosBodyx(body[i+1], 1);
        }
    }
    if(posBodyy(body[i]) > posBodyy(body[i+1])+1){
        setPosBodyy(body[i+1], 1)
        if(posBodyx(body[i]) < posBodyx(body[i+1])){
            setPosBodyx(body[i+1], -1);
        }else if(posBodyx(body[i]) > posBodyx(body[i+1])){
            setPosBodyx(body[i+1], 1);
        }
    }
}


function moveLeft(){
    setPosHeadx(-1);

    for(let i = 0; i < body.length-1; i++){
        move(i);
    }
}

function moveRight(){
    setPosHeadx(1);
    for(let i = 0; i < body.length-1; i++){
        move(i);
    }
}

function moveUp(){
    setPosHeady(-1);
    for(let i = 0; i < body.length-1; i++){
        move(i);
    }
}

function moveDown(){
    setPosHeady(1);
    for(let i = 0; i < body.length-1; i++){
        move(i);
    }
}


for(let i = 0; i < todayArr1.length-1; i++){
    let move = todayArr1[i].split(" ");
    if(move[0] == "L"){
        for(let j = 0; j < parseInt(move[1]); j++){
            moveLeft();
            pos.push("["+posTaily()+"]["+posTailx()+"]");
        }
    }else if(move[0] == "R"){
        for(let j = 0; j < parseInt(move[1]); j++){
            moveRight();
            pos.push("["+posTaily()+"]["+posTailx()+"]");
        }
    }else if(move[0] == "U"){
        for(let j = 0; j < parseInt(move[1]); j++){
            moveUp();
            pos.push("["+posTaily()+"]["+posTailx()+"]");
        }
    }else if(move[0] == "D"){
        for(let j = 0; j < parseInt(move[1]); j++){
           moveDown();
           pos.push("["+posTaily()+"]["+posTailx()+"]");
        }
    }
}

console.log([...new Set(pos)].length);


/* part two */
