let maxValue = 0;
let maxValue2 = 0;
let maxValue3 = 0;

let currentMaxIndex = 0;
let currentMaxIndex2 = 0;
let currentMaxIndex3 = 0;

let currentIndex = 0;
let currentValue = 0;
let today = document.getElementById("a").innerText;
let todayArr = today.split("\n");

todayArr.forEach(item => {
    if(item=="")
    {
        if(currentValue>maxValue)
        {
            currentMaxIndex = currentIndex;
            maxValue=currentValue;
        }else if(currentValue > maxValue2){
            currentMaxIndex2 = currentIndex;
            maxValue2=currentValue;
        }else if(currentValue > maxValue3){
            currentMaxIndex3 = currentIndex;
            maxValue3 = currentValue;
        }
        currentIndex++;
        currentValue = 0;                                                    
    }
    else
    {
        currentValue = parseInt(currentValue) + parseInt(item)
    }
    }   
);
console.log(maxValue+maxValue2+maxValue3);
    