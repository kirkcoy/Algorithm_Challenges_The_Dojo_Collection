//// Array: Remove Negatives
function removeNegative(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            for(let j = i; j < arr.length; j++){
                arr[j] = arr[j+1];
            }
            arr.length--;
            i--;
        }
    }
    return arr;
}
console.log(removeNegative([-1,1,-1,7,3]));
console.log(removeNegative([1,-3]));

// Second: Not a Nested Array
function removeNegative2(arr){
    for(let i = 0; i < arr.length; i++){
//         console.log(arr)
        if(arr[i] < 0){
//             console.log(arr)
            let temp = arr[i];
            arr[i] = arr[arr.length-1];
            arr[arr.length-1] = temp;
            arr.pop();
            i--;
        }
    }
    return arr;
}
console.log(removeNegative2([-1,1,-1,7,3]));
console.log(removeNegative2([1,-3]));

//// Array: Second-to-Last
function secondToLast(arr){
    if(arr.length >= 2){
        return arr[arr.length-2];
    } else {
        return null;
    }
}
console.log(secondToLast([42,true,4,"Kate",7]));
console.log(secondToLast(["Kate"]));

//// Array: Second-Largest
function secondLargest(arr){
    let max = arr[0];
    let secondLargestMax;
    if(arr.length < 2){
        return null;
    } else {
        for(let i = 0; i < arr.length; i++){
            if(arr[i] < max){
                if(secondLargestMax == undefined){
                    secondLargestMax = arr[i];
                } else if(arr[i] > secondLargestMax){
                    secondLargestMax = arr[i];
                }
            }
        }
        return secondLargestMax;
    }
}
console.log(secondLargest([42,1,4,Math.PI,7]));
console.log(secondLargest([42,1,4,8,Math.PI,7]));
console.log(secondLargest([42]));

//// Array: Nth-to-Last
function nToLast(arr,n){
    if(arr.length < 2){
        return null;
    } else {
        return arr[arr.length-n];
    }
}
console.log(nToLast([5,2,3,6,4,9,7],3));
console.log(nToLast([42],1));

//// Array: Nth-Largest
function nLargest(arr,n){
    for(let i = 0; i < arr.length ; i++){
        for(let j = 0; j < arr.length-i; j++){
            if(arr[j] < arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr[n-1];
}
console.log(nLargest([5,2,3,6,4,9,7],2));

//// Credit Card Validation
function isCreditCardValid(digitArr){
    let last = digitArr.pop();
    let sum = 0;
    for(let i = 0; i < digitArr.length; i++){
        if(i%2 !== 0){
            digitArr[i] *= 2;
            if(digitArr[i] > 9){
                digitArr[i] -= 9;
                sum += digitArr[i];
            } else {
                sum += digitArr[i];
            }
        } else {
            sum += digitArr[i];
            console.log(digitArr)
        }
    }
    if((sum+last)%10 === 0){
        return true;
    } else {
        return false;
    }
}
console.log(isCreditCardValid([5,2,2,8,2]));
