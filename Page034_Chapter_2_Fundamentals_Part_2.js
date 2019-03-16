//// Date, on a Deserted Island

// 1
function weekdayName(weekdayNum){
    switch (weekdayNum){
        case 1:
            console.log("Sunday - Enjoy your day off!" );
            return "Sunday";
        case 2:
            console.log("Monday - Work Hard!");
            return "Monday"
        case 3:
            console.log("Tuesday - Work Hard!");
            return "Tuesday"
        case 4:
            console.log("Wednesday - Work Hard!");
            return "Wednesday"
        case 5:
            console.log("Thursday - Work Hard!");
            return "Thursday"
        case 6:
            console.log("Friday - Work Hard!");
            return "Friday"
        case 7:
            console.log("Saturday - Enjoy your day off!");
            return "Saturday"
        default :
            console.log("Put numbers 1-7 only");
            return "Put numbers 1-7 only"
    }
}
weekdayName(8);
weekdayName(7);
weekdayName(6);
weekdayName(5);
weekdayName(4);
weekdayName(3);
weekdayName(2);
weekdayName(1);
weekdayName(0);
console.log("-------------------------");

// 2
function weekdayName2(dayNum){
    if(dayNum > 365 || dayNum < 1){
        console.log("Put numbers 1-365 only");
        return "Put numbers 1-365 only"
    } else {
        day = dayNum%7;
        if( day === 0){
            day = 7;
        }
        return weekdayName(day);
    }
}
weekdayName2(0);
weekdayName2(8);
weekdayName2(9);
weekdayName2(10);
weekdayName2(11);
weekdayName2(12);
weekdayName2(13);
weekdayName2(366);
console.log("-------------------------");

// 3
function someDays(){
    for(let i = 1; i <= 17; i++){
        daySelect = Math.floor(Math.random()*365)+1
        weekdayName2(daySelect);
        console.log(i);
    }
}
someDays();
console.log("-------------------------");

// 4
function monthName(monthNum){
    if(monthNum >= 1 && monthNum <= 12){
        array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month = array[monthNum - 1]
        console.log(month);
        return month
    } else {
        console.log("Put numbers 1-12 only");
    }
}
monthName(0);
monthName(1);
monthName(12);
monthName(13);
console.log("-------------------------");

// 5
function monthToDays(monthNum){
    let month = monthName(monthNum);
    switch (month){
        case "January":
            console.log("31 days");
            return 0;
        case "February":
            console.log("28 days");
            return 31;
        case "March":
            console.log("31 days");
            return 59;
        case "April":
            console.log("30 days");
            return 90;
        case "May":
            console.log("31 days");
            return 120;
        case "June":
            console.log("30 days");
            return 151;
        case "July":
            console.log("31 days");
            return 181;
        case "August":
            console.log("31 days");
            return 212;
        case "September":
            console.log("30 days");
            return 243;
        case "October":
            console.log("31 days");
            return 273;
        case "November":
            console.log("30 days");
            return 304;
        case "December":
            console.log("31 days");
            return 334;
    }
}
monthToDays(0);
monthToDays(1);
monthToDays(12);
monthToDays(13);
console.log("-------------------------");

// 6
function dayToMonth(dayNum){
    if(dayNum < 1 && dayNum > 365){
        console.log("Put numbers 1-365 only");
    } else if(dayNum >= 1 && dayNum <= 31 ){
        return 1;
    } else if(dayNum >= 32 && dayNum <= 59 ){
        return 2;
    } else if(dayNum >= 60 && dayNum <= 90 ){
        return 3;
    } else if(dayNum >= 91 && dayNum <= 120 ){
        return 4;
    } else if(dayNum >= 121 && dayNum <= 151 ){
        return 5;
    } else if(dayNum >= 152 && dayNum <= 181 ){
        return 6;
    } else if(dayNum >= 182 && dayNum <= 212 ){
        return 7;
    } else if(dayNum >= 213 && dayNum <= 243 ){
        return 8;
    } else if(dayNum >= 244 && dayNum <= 273 ){
        return 9;
    } else if(dayNum >= 274 && dayNum <= 304 ){
        return 10;
    } else if(dayNum >= 305 && dayNum <= 334 ){
        return 11;
    } else if(dayNum >= 335 && dayNum <= 365 ){
        return 12;
    }
}
console.log(dayToMonth(75));

// 7
function fullDate(dayNum){
    let day = weekdayName2(dayNum);
    let monthDate = dayToMonth(dayNum);
    let month = monthName(monthDate);
    let date = dayNum-monthToDays(monthDate);
    return day + ", " + month + " " + date + ", 2017";
}

console.log(fullDate(142))// 142 - Monday, May 22, 2017
console.log("-------------------------");

// *8
function fullDate2(dayNum){
    let startYear = 2017;
    let numDaysIn4Years = 1461 // = 365+365+365+366 days
    let dayYear = 365;
    // count
    let year = Math.floor(dayNum/numDaysIn4Years)*4+startYear;
    console.log(year); // 2036
    let YearsInDays = dayNum%numDaysIn4Years; // 1170
    year += Math.floor(YearsInDays/dayYear); // 3  - years remain within  4-year cycle
    let dayNumRemaining = YearsInDays%365; // 75 - days remaining
    console.log(dayNumRemaining);
    let day = weekdayName2(dayNumRemaining);
    let monthDate = dayToMonth(dayNumRemaining);
    let month = monthName(monthDate);
    let date = dayNumRemaining-monthToDays(monthDate);
    return day + ", " + month + " " + date + ", " + year; // Thursday, March 15, 2040
}
console.log(fullDate2(8475));

// *9
