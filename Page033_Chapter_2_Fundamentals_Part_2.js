//// Gaming Fun(damentals)
// Roll Dice
function rollOne(){
    return Math.floor(Math.random()*6)+1
}
console.log(rollOne());
console.log("---------------------------");

// Roll num times
function playFives(num){
    for(let i = 1; i <= num; i++){
        let diceNum = rollOne();
        if(diceNum == 5){
            console.log("That's good luck");
        }
        console.log("num: " + i + " - diceNum: " + diceNum);
    }
}
playFives(5);
console.log("---------------------------");

// Roll 8 and Add Low and High
function playStatistics(){
    let oneRoll = rollOne();
    let low = oneRoll;
    let high = oneRoll;
    let count = 1;
    for(let i = 2; i <= 8; i++){
        count++;
        let diceNum = rollOne();
        if(diceNum < low){
            low = diceNum;
        }
        if(diceNum > high){
            high = diceNum;
        }
    }
    console.log("Low: " + low + " - High: " + high);
    console.log("Count: " + count);
}
playStatistics();
console.log("---------------------------");

// Add Sum
function playStatistics2(){
    let oneRoll = rollOne();
    let low = oneRoll;
    let high = oneRoll;
    let sum = oneRoll;
    let count = 1;
    for(let i = 2; i <= 8; i++){
        count++;
        let diceNum = rollOne();
        sum += diceNum;
        if(diceNum < low){
            low = diceNum;
        } else if(diceNum > high){
            high = diceNum;
        } else {
            continue;
        }
    }
    console.log("Low: " + low + " - High: " + high + " - Sum: " + sum);
    console.log("Count: " + count);
}
playStatistics2();
console.log("---------------------------");

// Add Num Parameter
function playStatistics3(num){
    let oneRoll = rollOne();
    let low = oneRoll;
    let high = oneRoll;
    let sum = oneRoll;
    let count = 1;
    for(let i = 2; i <= num; i++){
        count++;
        let diceNum = rollOne();
        sum += diceNum;
        if(diceNum < low){
            low = diceNum;
        } else if(diceNum > high){
            high = diceNum;
        } else {
            continue;
        }
    }
    console.log("Low: " + low + " - High: " + high + " - Sum: " + sum);
    console.log("Count: " + count);
}
playStatistics3(1);
playStatistics3(2);
playStatistics3(3);
playStatistics3(4);
playStatistics3(5);
console.log("---------------------------");

// Sum to Ave
function playStatistics3(num){
    let oneRoll = rollOne();
    let low = oneRoll;
    let high = oneRoll;
    let sum = oneRoll;
    let count = 1;
    for(let i = 2; i <= num; i++){
        count++;
        let diceNum = rollOne();
        sum += diceNum;
        if(diceNum < low){
            low = diceNum;
        } else if(diceNum > high){
            high = diceNum;
        } else {
            continue;
        }
    }
    console.log("Low: " + low + " - High: " + high + " - Ave: " + sum/num);
    console.log("Count: " + count);
}
playStatistics3(1);
playStatistics3(2);
playStatistics3(3);
playStatistics3(4);
playStatistics3(5);
console.log("---------------------------");

//// Statistics Until Doubles
function rollDice(){
    return Math.floor(Math.random()*20)+1
}

function roll(){
    let count = 1;
    let rollDiceNum = rollDice();
    let min = rollDiceNum;
    let max = rollDiceNum;
    let sum = rollDiceNum;
    for(let i = 2; i <= 20; i++){
        count++;
        let nextRoll = rollDice()
        sum += nextRoll;
        if(nextRoll == rollDiceNum){
            i = 20;
        }
        if(nextRoll < min){
            min = nextRoll;
            rollDiceNum = nextRoll;
        } else if(nextRoll > max){
            max = nextRoll;
            rollDiceNum = nextRoll;
        } else {
            continue;
        }
    }
    console.log("Number of rolls: " + count + " - Min: " + min + " - Max: " + max + " - Ave: " + sum/count);
}
roll();

//// Claire is Where?

var x = 0;
var y = 0;

function reset(){
    x = 0;
    y = 0;
    return "x: " + x + " y: " + y;
}

function moveBy(xOffSet,yOffSet){
    x += xOffSet;
    y += yOffSet;
    return "New x: " + x + " y: " + y;
}

function xLocation(){
    return "x: " + x;

}

function yLocation(){
    return "y: " + y;
}

function distFromHome(){
    return "Distance : " + Math.sqrt(x*x + y*y);
}

console.log(reset());
console.log(moveBy(1,-2));
console.log(moveBy(3,1));
console.log(xLocation());
console.log(yLocation());
console.log(moveBy(0,4));
console.log(distFromHome());

