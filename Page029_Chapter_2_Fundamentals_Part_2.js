//// Threes and Fives
function threesFives(){
    let sum = 0;
    for(let i = 100; i <= 4000000; i++){
        if(i%3 === 0 && i%5 === 0){
            continue;
        } else if (i%3 === 0 || i%5 === 0){
            console.log(i);
            sum += i;
        }
    }
    console.log(sum);
}
threesFives();

// Second
function betterThreesFives(start,end){
    let sum = 0;
    for(let i = start; i <= end; i++){
        if(i%3 === 0 && i%5 === 0){
            continue;
        } else if (i%3 === 0 || i%5 === 0){
            console.log(i);
            sum += i;
        }
    }
    console.log(sum);
}
betterThreesFives(1,18);

//// Generate Coin Change
function generateCoinChange(amt){
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;
    if(amt > 24){
        quarters = Math.floor(amt/25);
        amt = (amt%25);
    }
    if(amt > 9){
        dimes = Math.floor(amt/10);
        amt = (amt%10);
    }
    if(amt > 4){
        nickels = Math.floor(amt/5);
        amt = (amt%5);
    } 
    pennies = amt;
    console.log("quarters : " + quarters);
    console.log("dimes : " + dimes);
    console.log("nickels : " + nickels);
    console.log("pennies : " + pennies);
}
generateCoinChange(94);

// Or
function secondGenerateCoinChange(amt){
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;
    while(amt > 24){
        amt -= 25;
        quarters++;
    }
    while(amt > 9){
        amt -= 10;
        dimes++;
    }
    while(amt > 4){
        amt -= 5;
        nickels++;
    } 
    pennies = amt;
    console.log("quarters : " + quarters);
    console.log("dimes : " + dimes);
    console.log("nickels : " + nickels);
    console.log("pennies : " + pennies);
}
secondGenerateCoinChange(94);

// With Halfdollar and Dollar
function generateCoinChange(amt){
    let dollars = 0;
    let halfdollar = 0;
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;
    if(amt > 99){
        dollars = Math.floor(amt/100);
        amt = (amt%100);
    }
    if(amt > 49){
        halfdollar = Math.floor(amt/50);
        amt = (amt%50);
    }
    if(amt > 24){
        quarters = Math.floor(amt/25);
        amt = (amt%25);
    }
    if(amt > 9){
        dimes = Math.floor(amt/10);
        amt = (amt%10);
    }
    if(amt > 4){
        nickels = Math.floor(amt/5);
        amt = (amt%5);
    } 
    pennies = amt;
    console.log("dollars : " + dollars);
    console.log("halfdollar : " + halfdollar);
    console.log("quarters : " + quarters);
    console.log("dimes : " + dimes);
    console.log("nickels : " + nickels);
    console.log("pennies : " + pennies);
}
generateCoinChange(194);

// Or
function secondGenerateCoinChange(amt){
    let dollars = 0;
    let halfdollar = 0;
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;
    while(amt > 99){
        amt -= 100;
        dollars++;
    }
    while(amt > 49){
        amt -= 50;
        halfdollar++;
    }
    while(amt > 24){
        amt -= 25;
        quarters++;
    }
    while(amt > 9){
        amt -= 10;
        dimes++;
    }
    while(amt > 4){
        amt -= 5;
        nickels++;
    }
    pennies = amt;
    console.log("dollars : " + dollars);
    console.log("halfdollar : " + halfdollar);
    console.log("quarters : " + quarters);
    console.log("nickels : " + nickels);
    console.log("dimes : " + dimes);
    console.log("pennies : " + pennies, );
}
secondGenerateCoinChange(194);

//// Messy Math Mashup
function messyMath(num){
    let sum = 0;
    for(let cnt = 0; cnt <= num; cnt++){
        if(cnt === num/3){
            return -1;
        } else if(cnt%3 !== 0){
            if (cnt%7 === 0){
                sum += cnt*2;
            } else {
                sum += cnt;
            }
        }
    }
    return sum;
}
console.log(messyMath(4));
console.log(messyMath(8));
console.log(messyMath(15));
