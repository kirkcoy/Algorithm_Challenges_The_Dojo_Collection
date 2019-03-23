//// Array: Shuffle.
function shuffle(arr){
    for(let i = 0; i < arr.length; i++){
        let rand = Math.floor(Math.random()*arr.length);
        let temp = arr[i];
        arr[i] = arr[rand];
        arr[rand] = temp;
    }
    return arr;
}
console.log(shuffle([1,2,3,4,5,6,7,8,9]));

//// Array: Remove Range.
function removeRange(arr,start,end){
    let count = 0;
    for(let i = start; i <= end-count; i++){
        for(let j = i; j < arr.length; j++){
            arr[j] = arr[j+1];
        }
        arr.pop();
        i--;
        count++;
    }
    return arr;
}
console.log(removeRange([20,30,40,50,60,70],2,4));

//// Intermediate Sums.
function intermediateSum(arr){
    let count = 0;
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        count++;
        sum += arr[i];
        if(count == 10){
            for(let j = arr.length-1; j >= i; j--){
                arr[j+1] = arr[j];
            }
            arr[i+1] = sum;
            sum = 0;
            i++;
        }
    }
    if(sum > 0){
        arr.push(sum);
    }
    return arr;
}
console.log(intermediateSum([1,2,1,2,1,2,1,2,1,2,1,2,1,2]));

//// Double Trouble.
function doubleTrouble(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = arr.length-1; j >= i; j--){
            arr[j+1] = arr[j];
        }
        i++;
    }
    return arr;
}
console.log(doubleTrouble([4,'Uli',42,false]));

//// Zip It.
function zipIt(arrOne, arrTwo){
    let newArr = [];
    let countOne = 0;
    let countTwo = 0;
    let switchOne = true;
    let length = arrOne.length + arrTwo.length;
    for(let i = 0; i < length; i++){
        if(switchOne){
            if(countOne != arrOne.length){
                newArr.push(arrOne[countOne]);
                countOne++;
                switchOne = false;
            } else {
                switchOne = false;
                i--;
            }
        } else {
            if(countTwo != arrTwo.length){
                newArr.push(arrTwo[countTwo]);
                countTwo++;
                switchOne = true;
            } else {
                switchOne = true;
                i--;
            }
        }
    }
    return newArr;
}
console.log(zipIt([1,2],[10,20,30,40]));
console.log(zipIt([10,20,30,40],[1,2]));


