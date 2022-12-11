/*
Find the signal strength during the 20th, 60th, 100th, 140th, 180th, and 220th cycles. 
What is the sum of these six signal strengths?


*/


/* First challenge*/

// Setup
let today1 = document.getElementById("a").innerText;
let todayArr1 = today1.split("\n\n");
let monkeyList = []

for(let i = 0; i < todayArr1.length; i++){
    let line = todayArr1[i].split("\n");
    let sitems = [] 
    let soperator = ""
    let value = 0
    let testValue = 0 
    let trueMonkey = 0 
    let falseMonkey = 0

    let content = line[1].replace("  Starting items: ", "");
    for(let j of content.split(", ")){
        sitems.push(parseInt(j));
    }
    content = line[2].replace("  Operation: new = old ", "");
    soperator = content.split(" ")[0];
    if(content.split(" ")[1] == "old"){
        value = soperator;
        soperator = "old"
    }else{
        value =  parseInt(content.split(" ")[1]);
    }
    content = line[3].replace("  Test: divisible by ", "");
    testValue = parseInt(content);
    content = line[4].replace("    If true: throw to monkey ", "");
    trueMonkey = parseInt(content);
    content = line[5].replace("    If false: throw to monkey ", "");
    falseMonkey = parseInt(content);
    monkeyList.push(monkey(sitems, soperator, value, testValue, trueMonkey, falseMonkey));
}

for(let i = 0; i < 10000; i++){
    for(monkey of monkeyList){
        monkey.monkeysTurn();
    }
}

for(monkey of monkeyList){
    console.log(monkey.returnTotal());
}

/*

Starting items: 92, 73, 86, 83, 65, 51, 55, 93
  Operation: new = old * 5
  Test: divisible by 11
    If true: throw to monkey 3
    If false: throw to monkey 4

*/

function monkey(sitems, soperator, value, testValue, trueMonkey, falseMonkey){
    let items = sitems;
    let operator = soperator;
    let operationValue = value;
    let divValue = testValue;
    let totalOperations = 0;

    const monkeyActions = {
        addItem(value){
            items.push(value);
        },
        doOperation(value){
            switch(operator){
                case "*": return value*operationValue; 
                case "+": return value+operationValue;
                case "old": return operationValue == "+" ? value + value : value * value;
            }
        },
        monkeysTurn(){
            for(let i = 0; i < items.length; i++){
                let v = this.doOperation(items[i])%9699690;
                if(v%divValue == 0){
                    monkeyList[trueMonkey].addItem(v); 
                }else{
                    monkeyList[falseMonkey].addItem(v);
                }
                totalOperations++;
            }
            items = [];
        },
        returnTotal(){
            return totalOperations;
        }
    }
    return monkeyActions;
}



