//// Sigma
function sigma(num){
    var sum = 0;
    for(var i = 1; i<=num; i++){
        sum += i;
    }
    return sum;
}
console.log(sigma(3));
console.log(sigma(5));

//// Factorial
// basic for-loop
function factorial(num){
    if(num === 0){
        return 0;
    } else {
        var multiply = 1;
        for(var i = 2; i<=num; i++ ){
            multiply *= i;
            console.log(multiply)
        }
    }
    return multiply
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
  
// recursive method
function factorialRecursive(num){
    if(num===0){
        return 0;
    }
    if(num===1){
        return 1;
    }
    return num*factorialRecursive(num-1);
  }
console.log(factorialRecursive(0));
console.log(factorialRecursive(1));
console.log(factorialRecursive(3));
console.log(factorialRecursive(4));
console.log(factorialRecursive(5));
// notes
// num = 3
// 		\								   ; = 3*(2) = 6 ; return 6
// 3*fac(3-1) = 3*fac(2)                      /
// num*fac(num-1);                           /
// 		num = 2						; = 2*(1) = 2 ; return 2
//            \                           /
// 			2*fac(2-1) = 2*fac(1)        /     
// 			num*fac(num-1);             /
//                   \                 /
// 					num = 1; return 1
// 					(num===1){return 1;}

//// Star Art
function drawLeftStars(num){
    var star = "";
    for(var i = 1; i<=15; i++){
        if(i <= num){
          star += "*";
        } else {
          star += "-";
        }       
    }
    console.log(star)
}
drawLeftStars(10);

function drawRightStars(num){
    var star = "";
    for(var i = 1; i<=15; i++){
        if(i <= 15-num){
          star += "-";
        } else {
          star += "*";
        }       
    }
 
    console.log(star)
}
drawRightStars(10);

function drawCenterStars(num){
    var star = "";
    var mid = Math.floor((15-num)/2);
//     console.log(mid)
    for(var i = 1; i<=15; i++){
        if(i <= mid || i >num+mid){
          star += "-";
        } else {
          star += "*";
        }
    }
    console.log(star)
}
drawCenterStars(9);
drawCenterStars(10);

function drawCenterStarsWars(num){
    var star = "";
    var mid = Math.floor((15-num)/2);
//     console.log(mid)
    var styleCount = 1;
    for(var i = 1; i<=15; i++){
        if(i <= mid || i >num+mid){
          star += "-";
        } else {
//           console.log("styleCount :" + styleCount)
          if(styleCount == 1){
             star += "(";
          } else if (styleCount == 3){
             star += "*";
          } else if (styleCount == 5){
             star += ")";
          } else if (styleCount % 2 === 0){
             star += "=";
          } 
          styleCount ++;
          if (styleCount == 6){
             styleCount = 1;
          }
        }
    }
    console.log(star)
}
drawCenterStarsWars(9);
drawCenterStarsWars(10);

//// Character Art
function drawLeftChar(num,char){
    var star = "";
    for(var i = 1; i<=15; i++){
        if(i <= num){
          star += char;
        } else {
          star += "-";
        }       
    }
    console.log(star)
}
drawLeftChar(10,"t");

function drawRightChar(num,char){
    var star = "";
    for(var i = 1; i<=15; i++){
        if(i <= 15-num){
          star += "-";
        } else {
          star += char;
        }       
    }
 
    console.log(star)
}
drawRightChar(10,"t");

function drawCenterChar(num,char){
    var star = "";
    var mid = Math.floor((15-num)/2);
//     console.log(mid)
    for(var i = 1; i<=15; i++){
        if(i <= mid || i >num+mid){
          star += "-";
        } else {
          star += char;
        }
    }
    console.log(star)
}
drawCenterChar(9,"t");
drawCenterChar(10,"t");
