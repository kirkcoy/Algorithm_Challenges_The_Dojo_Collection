//// Extract-o-matic
function extractDigit(num,digitNum){
    if(digitNum === 0){
        return Math.floor(num)%10
    } else {
        let mult = 1;
        for(let i = 1; i <= digitNum; i++){
            mult *= 10;
        }
        return Math.floor(num/mult)%10
    }
}
console.log(extractDigit(1824,2)); // 8
console.log(extractDigit(1824,0)); // 4
console.log(extractDigit(1824,7)); // 7

// Second Handle Negative Digit
function extractDigit(num,digitNum){
    if(digitNum === 0){
        return Math.floor(num)%10;
    } else if(digitNum < 0){
       let div = 1;
        for(let i = -1; i >= digitNum; i--){
            div *= 10;
        }
        return Math.floor(num*div)%10
    } else {
        let mult = 1;
        for(let i = 1; i <= digitNum; i++){
            mult *= 10;
        }
        return Math.floor(num/mult)%10;
    }
}
console.log(extractDigit(1824,2)); // 8
console.log(extractDigit(1824,0)); // 4
console.log(extractDigit(1824,7)); // 0
console.log(extractDigit(123.45,-1)); // 4
console.log(extractDigit(123.45,-2)); //

// *Third

//// Most Significant Digit
function mostSignificantDigit(num){
    if(num < 1){
      let temp = Math.floor(num*10)
      let prev;
      while(temp < 10){
        prev = num*10;
        num *= 10;
        temp = Math.floor(num*10);
      }
      return Math.floor(prev); 
    } else if(num > 1){
      let temp = Math.floor(num/10)
      let prev = num;
      while(temp > 0){
        prev = num/10;
        num /= 10;
        temp = Math.floor(num/10);
      }
      return Math.floor(prev);
    } else {
        return 0;
    }
}
console.log("ans: "+mostSignificantDigit(12345));
console.log("ans: "+mostSignificantDigit(67.89));
console.log("ans: "+mostSignificantDigit(0.00987));

// *Second Handles Negatives