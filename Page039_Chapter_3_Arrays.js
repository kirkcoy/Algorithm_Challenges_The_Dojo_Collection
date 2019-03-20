//// Array: Min to Front
function minToFront(arr){
    let min = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[min]){
            min = i;
        }
    }
    while(min > 0){
        temp = arr[min];
        arr[min] = arr[min-1];
        arr[min-1] = temp;
        min --;
    }
    return arr;
}
console.log(minToFront([4,2,1,3,5]))
