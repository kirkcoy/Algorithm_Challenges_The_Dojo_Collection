//// Tweleve-Bar Blues
function twelveBarBlues(){
    for(let i = 1; i <= 12; i++){
        console.log(i,"chick","boom","chick");
    }
}
twelveBarBlues();

//// Fibonacci
function fib(n){
    if(n === 0){
      return 0;
    }
    if(n == 1){
      return 1;
    } else {
       let value = fib(n-2) + fib(n-1);
       return value;
    }
  }
  console.log("fib(3) : " + fib(3));
  console.log("fib(4) : " + fib(4));
  console.log("fib(5) : " + fib(5));
  console.log("fib(6) : " + fib(6));
  console.log("fib(7) : " + fib(7));
  

//// Sum to One Digit
function sumToOne(num){
    if(num < 10){
        return num;
    } else {
        let str = num.toString();
        let sum = 0;
        for(let i = 0; i < str.length; i++){
            sum += parseInt(str[i]);
        }
        let value = sumToOne(sum);
        return sumToOne(value);
    }
}
console.log(sumToOne(928));
console.log(sumToOne(125));
console.log(sumToOne(12));

//// Clock Hand Angles
/*
(1sec) ; (1min/60secs) ; (1hr/60mins) ; (1hr/3600secs) 
(60secs/360degs) ; (60mins/360degs) ; (12hrs/360degs)
3600 secs = 1:00:00
360 = 1 rotation
*/
function clockHandAngles(time){
    let hours = 0;
    let hourHand = 0;
    let minuteHand = 0;
    let secondHand = 0;
    let hourHandDegs = 0;
    let minuteHandDegs = 0;
    let secondHandDegs = 0;
    if(time>3599){
        hours = Math.floor((time/3600)/24)*24;
        hourHand = (time/3600)%24;
        hourHandDegs = (hourHand*360)/12;
        time = (time%3600);
    }
    if(time>59){
        minuteHand = (time/60)%24;
        minuteHandDegs = (minuteHand*360)/60;
        time = (time%60);
    }
    secondHand = time;
    secondHandDegs = (secondHand*3600)/60;
    if(hours === 0){
        console.log(Math.floor(hourHand) + ":" + Math.floor(minuteHand) + ":" + Math.floor(secondHand));
        console.log("Hour hand: " + hourHandDegs + "degs. " + "Minute hand: " + minuteHandDegs + "degs. " + "Second hand: " + secondHandDegs + "degs.");
    } else if (hours === 1){
        console.log(Math.floor(hourHand) + ":" + Math.floor(minuteHand) + ":" + Math.floor(secondHand) + " plus " +hours+ " hour!");
        console.log("Hour hand: " + hourHandDegs + "degs. " + "Minute hand: " + minuteHandDegs + "degs. " + "Second hand: " + secondHandDegs + "degs.");
    } else {
        console.log(Math.floor(hourHand) + ":" + Math.floor(minuteHand) + ":" + Math.floor(secondHand) + " plus " +hours+ " hours!");
        console.log("Hour hand: " + hourHandDegs + "degs. " + "Minute hand: " + minuteHandDegs + "degs. " + "Second hand: " + secondHandDegs + "degs.");
    }
}
clockHandAngles(119730);
clockHandAngles(3600);

//// Is Prime
// Prime number is divisble by itself and 1.
function primeNumber(num){
    for(let i = 2; i < num; i++){
        if(num%i === 0){
            return false;
        }
    }
    return true;
}
console.log('2 : ' + primeNumber(2))
console.log('3 : ' + primeNumber(3))
console.log('4 : ' + primeNumber(4))
console.log('5 : ' + primeNumber(5))
console.log('6 : ' + primeNumber(6))
console.log('7 : ' + primeNumber(7))
console.log('8 : ' + primeNumber(8))
console.log('9 : ' + primeNumber(9))
console.log('10 : ' + primeNumber(10))
console.log('11 : ' + primeNumber(11))
console.log('12 : ' + primeNumber(12))
console.log('13 : ' + primeNumber(13))
console.log('14 : ' + primeNumber(14))
console.log('15 : ' + primeNumber(15))