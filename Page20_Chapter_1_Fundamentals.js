//// Countdown
function count(num){
    var newArr = [];
    for(var i = num; i > 0; i--){
        newArr.push(i-1);
    }
    return newArr;
}
console.log(count(5));

//// Print and Return
function printReturn(arr){
    console.log("log : " + arr[0]);
    return arr[1]
}
console.log("return : " + printReturn([1,2]));

//// First Plus Length
function firstPlusLength(arr){
    return arr[0]+arr.length;
}
console.log(firstPlusLength([1,1,1])); // 4
console.log(firstPlusLength(["what?",1])); // "what?2"
console.log(firstPlusLength([true,1,1])); // 4
console.log(firstPlusLength([false,1,1])); // 3

//// Values Greater than Second
function greaterSecond(arr){
    var second = arr[1], count = 0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i]>second){
            console.log(arr[i]);
            count++;
        }
    }
    return count
}
console.log(greaterSecond([1,3,5,7,9,13]));

//// Values Greater than Second, Generalized
function greaterSecondGen(arr){
    var second = arr[1], count = 0;
    for(var i = 0; i<arr.length; i++){
        if(arr.length > 1){
            if(arr[i]>second){
                console.log(arr[i]);
                count++;
            }
        } else {
            console.log(arr[0]);
            return "Array needs to have 2 elements!"
        }
    }
    return count
}
console.log(greaterSecondGen([1]));

//// This Length, That Value
function lengthValue(num1,num2){
    if(num1 === num2){
        var word = "JINX!!"
        console.log("JINX!");
        return word;
    } else {
        var array = [];
        for(var i = 0; i<num1; i++){
            array.push(num2);
        }
        return array;
    }
}
console.log(lengthValue(5,10));
console.log(lengthValue(5,5));

//// Fit the First Value
function fitFirstValue(arr){
    if(arr[0] > arr.length){
        console.log("Too big!");
    } else if(arr[0] < arr.length){
        console.log("Too small!");
    } else {
        console.log("Just right!");
    }
}
fitFirstValue([2,2]);
fitFirstValue([3,2]);
fitFirstValue([1,2]);

//// Farenheit to Celsius
function fahrenheitToCelsius(fDegrees){
    var temp = (5*(fDegrees-32))/9;
    return temp.toFixed(4);
}
console.log(fahrenheitToCelsius(32) + " Degree Celsius");
console.log(fahrenheitToCelsius(100) + " Degree Celsius");

//// Celsius to Farenheit
function celsiusToFahrenreit(cDegrees){
    var temp = ((9*cDegrees)/5)+32;
    return temp.toFixed(4);
}
console.log(celsiusToFahrenreit(0) + " Degree Fahrenfeit");
console.log(celsiusToFahrenreit(100) + " Degree Fahrenfeit");

// Optional Fahrenheit = Celsius
function checkTemp(cDegrees){
    var temp = "";
    for(var i = cDegrees; i>=0; i--){
        let fDegrees = ((9*i)/5)+32;
        console.log("i : " + i)
        console.log("f : " + fDegrees)
        if(cDegrees === fDegrees){
            temp += i+" " ;
        }
    }
    if(temp.length !== 0){
        return true;
    } else {
        return false;
    }
}
console.log(checkTemp(200));
