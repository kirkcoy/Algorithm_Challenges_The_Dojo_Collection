//// Print 1-255
function print1To255(){
    for(let i = 1; i <= 255; i++){
        console.log("i : " + i);
    }
}
print1To255();

//// Print Ints and Sum 0-255
function prinIntAndSumTo255(){
    let sum = 0;
    for(var i = 0; i <= 255; i++){
        console.log("i : " + i);
        sum += i;
      console.log("sum : " + sum);
    }
}
prinIntAndSumTo255();

//// Print Max of Array
function printMaxOfArray(arr){
    let max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log("max : " + max);
}
printMaxOfArray([1,5,3]);

//// Return Odds Array 1-255
function returnOddsArray1To255(){
    let newArr = [];
    for(let i = 1; i <= 255; i++){
        if(i%2 !== 0){
            newArr.push(i);
        }
    }
    return newArr;
}
console.log("New Odd Array : " , returnOddsArray1To255());

//// Return Array Count Greater than Y
function returnArrayCountGreaterThanY(arr,y){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > y){
            console.log(arr[i]);
            count++;
        }
    }
    return count;
}
console.log("count : " + returnArrayCountGreaterThanY([1,3,5,7,9],2));

//// Print Max, Min, Average Array Values
function printMaxMinAverageVals(arr){
    let max = arr[0];
    let min = arr[0];
    let sum = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        } else if (arr[i] < min){
            min = arr[i];
        }
        sum += arr[i];
    }
    console.log("max : " + max);
    console.log("min : " + min);
    console.log("average : " + sum/arr.length);
}
printMaxMinAverageVals([3,1,2]);

//// Swap String for Array Negative Values
function swapStringForArrayNegativeVals(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    console.log(arr);
}
swapStringForArrayNegativeVals([-1,2,-3]);

//// Print Odds 1-255
function printOdds1To255(){
    for(let i = 1; i < 255; i++){
        if(i%2 !== 0){
            console.log(i);
        }
    }
}
printOdds1To255();

//// Print Array Values
function printArrayVals(arr){
    for(let i = 0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
printArrayVals([1,2,3]);

//// Print Average of Array
function printAverageOfArray(arr){
    let sum = 0;
    for(var i = 0; i <arr.length; i++){
        sum += arr[i];
    }
    console.log(sum/arr.length)
}
printAverageOfArray([1,2,3]);

//// Square Array Values
function squareArraysVals(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] *= arr[i]
    }
    return arr;
}
console.log(squareArraysVals([1,2,3]));

//// Zero Out Array Negative Numbers
function zeroOutArrayNegativeVals(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(zeroOutArrayNegativeVals([1,2,-3,5]));

//// Shift Array Values Left
function shiftArrayValsLeft(arr){
    for(var i = 0; i < arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr.pop();
    arr.push(0);
    return arr;
}
console.log(shiftArrayValsLeft([1,2,3]));