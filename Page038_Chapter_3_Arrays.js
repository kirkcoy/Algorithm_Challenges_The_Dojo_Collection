//// Array: Push Front
function pushFront(arr,num){
    var temp;
    for(var i = arr.length-1; i >= 0; i--){
        temp = arr[i];
        arr[i+1] = temp;
    }
    arr[0] = num;
    return arr;
}
console.log(pushFront([7,8,9],4));
   
//// Array: Pop Front
function popFront(arr){
    var tempPop = arr.pop();
    var temp;
    for(var i = arr.length-1; i >= 0; i--){
        temp = arr[i];
        arr[i+1] = temp;
    }
    arr[0] = tempPop;
    return arr;
}
console.log(popFront([7,8,9,10]));

//// Array: Insert At
function inserAt(arr,idx,val){
    var temp;
    for(var i = arr.length-1; i >= idx; i--){
        temp = arr[i];
        arr[i+1] = temp;
    }
    arr[idx] = val;
    return arr;
}
console.log(inserAt([7,8,9],0,4));
console.log(inserAt([7,8,9],1,4));
console.log(inserAt([7,8,9],2,4));

//// Array: Remove At
function removeAt(arr,val){
    var tempPop = arr.pop();
    var temp;
    for(var i = arr.length-1; i >= val; i--){
        temp = arr[i];
        arr[i+1] = temp;
    }
    arr[val] = tempPop;
    return arr;
}
console.log(removeAt([7,8,9,10],0));
console.log(removeAt([7,8,9,10],1));
console.log(removeAt([7,8,9,10],2));
console.log(removeAt([7,8,9,10],3));

//// Array: Swap Pairs
function swapPairs(arr){
    for(var i = 0; i < arr.length-1; i+=2){
        if(arr[i+1] != undefined){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    return arr;
}
console.log(swapPairs([1,2,3,4]));
console.log(swapPairs(["Test",2,true]));

//// Array: Remove Duplicates.
function removeDuplicates(arr){
    var count = 0;
    for(var i = 1; i < arr.length-count; i++){
        if(arr[i] == arr[i-1]){ // 
            for(var j = i; j < arr.length-1 ; j++){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            count++;
            i--;
        }
    }
    arr.length-=count;
    return arr;
}
console.log(removeDuplicates(["A","B","B","B","C","C","D","E"]));
console.log(removeDuplicates(["A","B","B","B","C","C","D","E","E"]));
console.log(removeDuplicates(["A","B","C","C","C","C","D","E","E","E","F"]));
console.log(removeDuplicates(["A","A","B","B","B","C","C","D","E"]));

// Without nested loops
function removeDuplicates2(arr){
    var newArr = [];
    if (arr.length === 0 || arr.length == 1){
        return arr;
    }
    for(let i = 0; i<arr.length-1; i++){
        if(arr[i] != arr[i+1]){
            newArr.push(arr[i]);
        }
    }
    newArr.push(arr[arr.length-1]);
    return newArr;
}
console.log(removeDuplicates2(["A","B","B","B","C","C","D","E"]));
console.log(removeDuplicates2(["A","B","B","B","C","C","D","E","E"]));
console.log(removeDuplicates2(["A","B","C","C","C","C","D","E","E","E","F"]));
console.log(removeDuplicates2(["A","A","B","B","B","C","C","D","E"]));