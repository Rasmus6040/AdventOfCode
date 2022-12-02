/*
1 point for rock
2 point for paper
3 point for siccor
0 for loose
3 for draw
6 for win

a = rock
b = paper
c = sizzor
x = rock
y = paper
z = sizzor


x = loose
y = draw
z = win
*/




let today = document.getElementById("a").innerText;
let todayArr = today.split("\n");

let sum = 0;

todayArr.forEach(item => {
    switch (item) {
        case "A X": sum += 3+0; break;
        case "A Y": sum += 1+3; break;
        case "A Z": sum += 2+6; break;
        case"B X": sum += 1+0; break;
        case"B Y": sum += 2+3; break;
        case"B Z": sum += 3+6; break;
        case"C X": sum += 2+0; break;
        case"C Y": sum += 3+3; break;
        case"C Z": sum += 1+6; break;
        default: sum += 0;
    }
});
console.log(sum);
    