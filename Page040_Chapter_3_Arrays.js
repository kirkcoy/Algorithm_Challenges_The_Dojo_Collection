//// Array: Reverse.
function reverseArray(arr){
    for(let i = 0; i < Math.floor(arr.length/2); i++){
        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
console.log(reverseArray([1,2,3,4,5]));

//// Array: Rotate.
function rotateArr(arr, shiftBy){
    if(shiftBy === 0){
        return arr;
    } else {
        for(let i = 0; i < shiftBy; i++){
         
            let tempLast = arr[arr.length - 1];
            for(let j = arr.length-1; j > 0; j--){
                arr[j] = arr[j-1];
            }  
            arr[0] = tempLast;
        }
        return arr;
    }
}
console.log(rotateArr([1,2,3,4,5,6,7],1));
console.log(rotateArr([1,2,3,4,5,6,7],3));
console.log(rotateArr([1,2,3,4,5,6,7],12));

// Second: Negative Reverse.
function rotateArr(arr, shiftBy){
    if(shiftBy === 0){
        return arr;
    } else {
        for(let i = 0; i < Math.abs(shiftBy); i++){
            let tempLast =  arr[0];
            for(let j = 0; j < arr.length-1; j++){
                arr[j] = arr[j+1];
            }  
            arr[arr.length - 1] = tempLast;
        }
        return arr;
    }
}
console.log(rotateArr([1,2,3,4,5,6,7],-1));
console.log(rotateArr([1,2,3,4,5,6,7],-3));
console.log(rotateArr([1,2,3,4,5,6,7],-12));

// Third and Fourth: Less memory usage. Shift by Millions. Less touch.
function rotateArr(arr, shiftBy){
    if(shiftBy === 0){
        return arr;
    } else {
        let numShift = Math.abs(shiftBy) % arr.length;
        for(let i = 0; i < Math.abs(numShift); i++){     
            let tempLast =  arr[0];
            for(let j = 0; j < arr.length-1; j++){
                arr[j] = arr[j+1];
            }  
            arr[arr.length - 1] = tempLast;
        }
        return arr;
    }
}
console.log(rotateArr([1,2,3,4,5,6,7],-1));
console.log(rotateArr([1,2,3,4,5,6,7],-3));
console.log(rotateArr([1,2,3,4,5,6,7],-12));

//// Array: Filter Range.
function minMax(arr,min,max){
    console.log(arr);
      let count = 0;
      for(let i = 0; i < arr.length - count; i++){
            if(arr[i]<min || arr[i]>max){
                for(let j = i; j < arr.length - 1; j++){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
                count++;
                i--;
            }
        } 
        arr.length -= count;
        return arr;
    }
console.log(minMax([5,8,13,2,1],2,8));
console.log(minMax([5,8,13,2,1],3,10));

//// Array: Concat.
function arrConcat(arrOne, arrTwo){
    let newArr = [];
    for(let i = 0; i < arrOne.length; i++){
        newArr.push(arrOne[i]);
    }
    for(let i = 0; i < arrTwo.length; i++){
        newArr.push(arrTwo[i]);
    }
    return newArr;
}
console.log(arrConcat(['a','b'],[1,2]));

//// Skyline Heights.
function skylineHeights(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] <= max){
            max = arr[i];
            for(let j = i; j < arr.length; j++){
                arr[j] = arr[j+1];
            }
            arr.length--;
            i--;
        }
        max = arr[i];
    }
    return arr;
}
console.log(skylineHeights([-1,1,1,7,3]));
console.log(skylineHeights([0,3]));
