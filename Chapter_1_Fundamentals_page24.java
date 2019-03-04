//// Only Keep the Last Few
// splice an array
function spliceArray(arr,x){
    arr.splice(0,arr.length-x); // (start,how many)
    return arr;
}
console.log(spliceArray([2,4,6,8,10],3));

// shift an array
function shiftArray(arr,x){
    for(var i = arr.length; i>x; i-- ){
        arr.shift(x); // (start,how many)
    }
    return arr;
}
console.log(shiftArray([2,4,6,8,10],3));

// filter an array
// function filterArray(arr,x){
//     var filtered = array.filter(function(value, index, arr){
//     return value > 5;
// }
// console.log(filterArray([2,4,6,8,10],3));

//// Math Help
function findX(m,b){
    // var y = 0;
    // var x = (y-b)/m;
    // return x
    return -b/m
}
console.log(findX(3,3));
console.log(findX(1,0));

//// Poor Kenny
// dictionaries
var disasters = {
    1 : 'volcano',
    2 : 'tsunami',
    3 : 'earthquake',
    4 : 'blizzard',
    5 : 'meteor'
}
var count = 0;
var volcanos = 0;
var tsunamis = 0;
var earthquakes = 0;
var blizzards = 0;
var meteors = 0;
var sum = 0;
function whatHappensToday(){
    var disaster = Math.floor(Math.random() * 5) + 1; // random numbers from 1-5.
    count ++;
    console.log('count : ' + count);
    if(disasters[disaster] == "volcano"){
      volcanos++;
    } else if(disasters[disaster] == "tsunami"){
      tsunamis++;
    } else if(disasters[disaster] == "earthquake"){
      earthquakes++;
    } else if(disasters[disaster] == "blizzard"){
      blizzards++;
    } else if(disasters[disaster] == "meteor"){
      meteors++;
    } 
    console.log("volcanos :" + volcanos);
    console.log("tsunamis :" + tsunamis);
    console.log('earthquakes :' + earthquakes);
    console.log('blizzards :' + blizzards);
    console.log('meteors :' + meteors);
//     sum = volcanos + tsunamis + earthquakes + blizzards + meteors;
//     console.log("sum " + sum )
    console.log("----------------------")
}
whatHappensToday();
whatHappensToday();
whatHappensToday();
whatHappensToday();
whatHappensToday();

// using case and switch
var day; 
var disaster = Math.floor(Math.random() * 4) + 0; // random numbers from 1-5.
switch (disaster) {
  case 0:
    console.log(disaster);
    day = "Volcano";
    break;
  case 1:
    console.log(disaster);
    day = "Tsunami";
    break;
  case 2:
    console.log(disaster);
    day = "Earthquake";
    break;
  case 3:
    console.log(disaster);
    day = "Blizzard";
    break;
  case 4:
    console.log(disaster);
    day = "Meteor";
}
console.log(day)

//// Soaring IQ
// toFixed, with loop
function soaringIQ() {
    let iq = 101;
    for (let i = 1; i <= 98; i++) {
        iq = iq + .01;
    }
    return iq.toFixed(2);
}
console.log(soaringIQ());

// parseFloat, without loop
var iq = 101;
var days = 98;
iq = parseFloat(iq) + 0.01*parseFloat(days);
console.log(iq);

// Letter Grade
// basic
function letterGrade(score){
  if(score <= 100 && score >=90){
    console.log("Score: " + score + ". Grade A" );
  } else if(score <= 89 && score >=80){
    console.log("Score: " + score + ". Grade B" );
  } else if(score <= 79 && score >=70){
    console.log("Score: " + score + ". Grade C" );
  } else if(score <= 69 && score >=60){
    console.log("Score: " + score + ". Grade D" );
  } else if(score < 60){
    console.log("Score: " + score + ". Grade F" );
  }
}

letterGrade(95);
letterGrade(85);
letterGrade(75);
letterGrade(65);
letterGrade(55);

// switch - case
function letterGrade(score) {
    switch (true) {
        case score <= 100 && score >=90:
            console.log("Score: " + score + ". Grade A" );
            break;
        case score <= 89 && score >=80:
            console.log("Score: " + score + ". Grade B" );
            break;
        case score <= 79 && score >=70:
            console.log("Score: " + score + ". Grade C" );
            break;
        case score <= 69 && score >=60:
            console.log("Score: " + score + ". Grade D" );
            break;
        default:
            console.log("Score: " + score + ". Grade F" );
    }
}
letterGrade(95);
letterGrade(85);
letterGrade(75);
letterGrade(65);
letterGrade(55);

//// More Accurate Grades
// switch-case
function letterGrade(score) {
    switch (true) {
        case score <= 100 && score >=97:
            console.log("Score: " + score + ". Grade A+" );
            break;
        case score <= 96 && score >=93:
            console.log("Score: " + score + ". Grade A" );
            break;
        case score <= 92 && score >=90:
            console.log("Score: " + score + ". Grade A-" );
            break;
        case score <= 89 && score >=87:
            console.log("Score: " + score + ". Grade B+" );
            break;
        case score <= 86 && score >=83:
            console.log("Score: " + score + ". Grade B" );
            break;
        case score <= 82 && score >=80:
            console.log("Score: " + score + ". Grade B-" );
            break;
        case score <= 79 && score >=77:
            console.log("Score: " + score + ". Grade C+" );
            break;
        case score <= 76 && score >=73:
            console.log("Score: " + score + ". Grade C" );
            break;
        case score <= 72 && score >=70:
            console.log("Score: " + score + ". Grade C-" );
            break;
        case score <= 69 && score >=67:
            console.log("Score: " + score + ". Grade D+" );
            break;
        case score <= 66 && score >=63:
            console.log("Score: " + score + ". Grade D" );
            break;
        case score <= 62 && score >=60:
            console.log("Score: " + score + ". Grade D-" );
            break;
        default:
            console.log("Score: " + score + ". Grade F" );
    }
}
letterGrade(100);
letterGrade(98);
letterGrade(97);
letterGrade(96);
letterGrade(95);
letterGrade(93);
letterGrade(92);
letterGrade(91);
letterGrade(90);
letterGrade(85);
letterGrade(78);
letterGrade(62);
letterGrade(55);

function letterGrade(score){
    if(score <= 100 && score >=97){
        console.log("Score: " + score + ". Grade A+" );
    } else if(score <= 96 && score >=93){
        console.log("Score: " + score + ". Grade A" );
    } else if(score <= 92 && score >=90){
        console.log("Score: " + score + ". Grade A-" );
    } else if(score <= 89 && score >=87){
        console.log("Score: " + score + ". Grade B+" );
    } else if(score <= 86 && score >=83){
        console.log("Score: " + score + ". Grade B" );
    } else if(score <= 82 && score >=80){
        console.log("Score: " + score + ". Grade B-" );
    } else if(score <= 82 && score >=80){
        console.log("Score: " + score + ". Grade C+" );
    } else if(score <= 82 && score >=80){
        console.log("Score: " + score + ". Grade C" );
    } else if(score <= 82 && score >=80){
        console.log("Score: " + score + ". Grade C-" );


    } else if(score < 60){
        console.log("Score: " + score + ". Grade F" );
    }


case score <= 79 && score >=77:
    console.log("Score: " + score + ". Grade C+" );
    break;
case score <= 76 && score >=73:
    console.log("Score: " + score + ". Grade C" );
    break;
case score <= 72 && score >=70:
    console.log("Score: " + score + ". Grade C-" );
    break;
case score <= 69 && score >=67:
    console.log("Score: " + score + ". Grade D+" );
    break;
case score <= 66 && score >=63:
    console.log("Score: " + score + ". Grade D" );
    break;
case score <= 62 && score >=60:
    console.log("Score: " + score + ". Grade D-" );
    break;
default:
    console.log("Score: " + score + ". Grade F" );
}

letterGrade(100);
letterGrade(98);
letterGrade(97);
letterGrade(96);
letterGrade(95);
letterGrade(93);
letterGrade(92);
letterGrade(91);
letterGrade(90);
letterGrade(85);
letterGrade(78);
letterGrade(62);
letterGrade(55);