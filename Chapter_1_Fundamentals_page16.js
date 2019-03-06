//// Setting and Swapping
var myNumber = 42;
var myName = "mike";
var temp = myNumber;
myNumber = myName;
myName = temp;
console.log("myNumber : " + myNumber);
console.log("myName : " + myName);

//// Print -52 to 1066
for(var i = -52; i <= 1066; i++){
    console.log(i);
}

//// Don't Worry, Be Happy
function beCheerful(){
    console.log("Good Morning!");
}
for(var i = 1; i <= 98; i++){
    beCheerful();
    console.log(i);
}

//// Multiples of Three - but Not All
for(var i = -300; i <= 0; i++){
    if(i%3 === 0){
        if(i === -3 || i === -6){
            continue;
        } else {
            console.log(i);
        }
    }
}
// other solution
for(var i = -300; i <= 0; i+=3){
    if(i === -3 || i === -6){
        continue;
    } else {
        console.log(i);
    }
}

//// Print Integers with While
var i = 2000;
while(i <= 5280){
    console.log(i);
    i++
}

//// You Say It's Your Birthday
function guessBday(x,y){
    var m = 4;
    var d = 27;
    if((m == x && d == y) || (m == y && d == x)){
        console.log("How did you know?");
    } else {
        console.log("Just a another day.");
    }
}

//// Leap Year
function leapYear(year){
    if(year%4 === 0 && year%100 !== 0){
        console.log("Leap Year!");
    } else if(year%100 === 0 && year%400 === 0){
        console.log("Leap Year!");
    } else {
        console.log("Not a Leap Year!");
    }
}
leapYear(1700);
leapYear(2020);
leapYear(2000);

//or
function leapYear(year){
    if(year%4 === 0 && year%100 !== 0 || year%400 === 0){
        console.log("Leap Year!");
    } else {
        console.log("Not a Leap Year!");
    }
}
leapYear(1700);
leapYear(2020);
leapYear(2000);

//// Print and Count
var count = 0;
for(var i = 512; i <= 4096; i++){
    if(i%5 === 0){
        console.log(i);
        count++;
    }
}
console.log(count);

//// Multiples of Six
var i = 6;
while(i <= 60000){
    if(i%6 === 0){
        console.log(i);
    }
    i+=6;
}

//// Counting, the Dojo Way
for(var i = 1; i <= 100; i++){
    if(i%5 === 0){
        console.log("Coding");
    }
    if(i%10 === 0){
        console.log("Dojo");
    }
}

//// What Do You Know?
function print(incoming){
    console.log(incoming);
}
print("mike");

//// Whoa, That Sucker's Huge...
var x = -300000;
var y = 300000;
var sum = 0;
var z = y+x;
if(z > 0){
  for(var i = 0; i<=z; i++){
    if(i%2 !== 0){
        sum += i;
    }
  }
} else if(z < 0){
  for(var i = 0; i>=z; i--){
    if(i%2 !== 0){
        sum += i;
    }
  }
} else if(z === 0){
  console.log(sum);
}
console.log(sum);

//// Countdown by Fours
var i = 2016;
while(i > 0){
    console.log(i);
    i-=4;
}

//// Flexible Countdown
function countDown(lowNum,highNum,mult){
    for(var i = highNum; i > lowNum; i--){
        if(i%mult === 0){
            console.log(i);
        }
    }
}
countDown(2,9,3);

//// The Final Countdown
function finalCountDown(p1,p2,p3,p4){
    var i = p2;
    while(i <= p3){
        if(i%p1 === 0){
            if(i !== p4){
                console.log(i);
            }
        }
        i++;
    }
}
finalCountDown(3,5,17,9);