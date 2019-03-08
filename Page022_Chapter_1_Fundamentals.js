//// Biggie Size
function makeItBig(arr){
    for(var i = 0; i<arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big";
        }
    }
    return arr;
}
console.log(makeItBig([-1,3,5,-5]));

//// Print Low, Return High
function printlowReturnhigh(arr){
    var low = arr[0];
    var high = arr[0];
    for(var i = 1; i<arr.length; i++){
        if(arr[i]<low){
            low = arr[i];
        } else if(arr[i]>high){
            high = arr[i];
        }
    }
    console.log("low : " + low);
    return "high : " + high;
}
console.log(printlowReturnhigh([-1,3,5,-5]));

//// Print One, Return Another
function printoneReturnanother(arr){
    console.log("print one : " + arr[arr.length - 2]);
    for(var i = 0; i<arr.length; i++){
        if(arr[i]%2 !== 0){
            return "return another : " + arr[i];
        }
    }
}
console.log(printoneReturnanother([-1,3,5,-5]));

//// Double Vision
function double(arr){
    var newArr = [];
    for(var i = 0; i<arr.length; i++){
        newArr.push(arr[i]*=2);
    }
    return newArr;
}
console.log(double([1,2,3]));

//// Count Positives
function countPositives(arr){
    var sum = 0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i]>0){
            sum += arr[i];
        }
    }
    arr[arr.length-1] = sum;
    return arr;
}
console.log(countPositives([-1,1,1,1]));

//// Evens and Odds
function evenOdd(arr){
    var countEven = 0;
    var countOdd = 0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i]%2 === 0){ // even
            countEven++;
            countOdd = 0;
            if(countEven == 3){
                console.log("Even more so!");
                countEven = 0;
            }
        } else { // odd
            countOdd++;
            countEven = 0;
            if(countOdd == 3){
                console.log("That's odd!");
                countOdd = 0;
            }
        }
    }
}
evenOdd([1,1,2,2,1,2,1,2,1,1,1,2,1,1,1]);
evenOdd([2,2,1,1,2,1,2,1,2,2,2,1,2,2,2]);

//// Increment the Seconds
function incrementSeconds(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i][0]%2 !== 0){
            arr[i][0] += 1;
        }
        console.log("element : " + arr[i][0]);
    }
    return arr
}
console.log(incrementSeconds([[1],[3],[2]]));

// Or
function incrementSeconds(arr){
    if(arr.length%2 !== 0){
      arr.push([1]);
    }
    for( i = 0; i < arr.length; i++){
      console.log("element : " + arr[i][0]);
    }
      return arr
  }
  console.log(incrementSeconds([[1],[3],[2]]));

//// Previous Lengths
function previousLengths(arr){
    console.log(arr[0][0]);
    console.log(arr[1][0]);
    let num = arr[0][0].length.toString();
    let arrayLength = arr[1][0].length;
    let newWord = ""
    let newArr = [];
    for(let i = 0; i < arrayLength; i++){
      newWord += num;
    }
    arr.pop();
    newArr.push(newWord);
    arr.push(newArr);
    return arr
}
console.log(previousLengths([["sun"],["moon"]]));

//// Add Seven to Most
function addSeven(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i]+7);
    }
    return newArr;
}
console.log(addSeven([1,2,3,"Seven"]))

//// Reverse Array
function reverse(arr){
    for(var i = 0; i<Math.floor(arr.length/2); i++){
        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
console.log(reverse([3,1,6,4,2]));

//// Outlook: Negative
function negativeOne(arr){
    let newArr = [];
    for(var i = 0; i<arr.length; i++){
        if(arr[i] > 0){
            newArr.push(-Math.abs(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(negativeOne([1,-3,5]));

//// Always Hungry
function sayYummy(arr){
    let hungry = true;
    for(var i = 0; i<arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
            hungry = false;
        }
    }
    if(hungry){
        console.log("I'm hungry");
    }
}
sayYummy([1,1,1,"food",1,1,1,"food"]);
sayYummy([1,1,1,1,1,1]);

//// Swap Toward the Center
function swapTowardCenter(arr){
    for(var i = 0; i<Math.floor(arr.length/2); i++){
        if(i%2 === 0){
            let temp = arr[i];
            arr[i] = arr[arr.length-1-i];
            arr[arr.length-1-i] = temp;
        }
    }
    return arr;
}
console.log(swapTowardCenter([true,42,"Ada",2,"pizza"]));
console.log(swapTowardCenter([1,2,3,4,5,6]));

//// Scale the Array
function scaleArray(arr,num){
    for(var i = 0; i<arr.length; i++){
        arr[i] *= num;
    }
    return arr;
}
console.log(scaleArray([1,2,3,4,5],2));
