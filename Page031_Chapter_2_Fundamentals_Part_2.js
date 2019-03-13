//// Rockin' the Dojo Sweatshirt
function sweatshirtPricing(num){
    if(num == 1){
        return "$20";
    } else if(num == 2){
        return "$" + Math.ceil(20*0.91);
    } else if(num == 3){
        return "$" + Math.ceil(20*0.81);
    } else if(num > 3){
        return "$" + Math.ceil(20*0.65);
    } else {
        return "Enter number of shirts."
    }
}
console.log(sweatshirtPricing(0));
console.log(sweatshirtPricing(1));
console.log(sweatshirtPricing(2));
console.log(sweatshirtPricing(3));
console.log(sweatshirtPricing(4));
console.log(sweatshirtPricing(5));

//// Cloack Hand Angles, Revisted
// ????
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
        console.log("Hour hand: " + Math.floor(hourHandDegs) + "degs. " + "Minute hand: " + Math.floor(minuteHandDegs) + "degs. " + "Second hand: " + Math.floor(secondHandDegs) + "degs.");
    } else if (hours === 1){
        console.log(Math.floor(hourHand) + ":" + Math.floor(minuteHand) + ":" + Math.floor(secondHand) + " plus " +hours+ " hour!");
        console.log("Hour hand: " + Math.floor(hourHandDegs) + "degs. " + "Minute hand: " + Math.floor(minuteHandDegs) + "degs. " + "Second hand: " + Math.floor(secondHandDegs) + "degs.");
    } else {
        console.log(Math.floor(hourHand) + ":" + Math.floor(minuteHand) + ":" + Math.floor(secondHand) + " plus " +hours+ " hours!");
        console.log("Hour hand: " + Math.floor(hourHandDegs) + "degs. " + "Minute hand: " + Math.floor(minuteHandDegs) + "degs. " + "Second hand: " + Math.floor(secondHandDegs) + "degs.");
    }
}
clockHandAngles(119730);
clockHandAngles(3600);