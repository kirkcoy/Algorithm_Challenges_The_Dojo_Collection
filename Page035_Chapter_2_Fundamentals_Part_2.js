/*
Weekend Challenge: Fundamentals, Part 2
Incorporate the Math library into a new quiz game.
See it users can memorize 10 digits of Pi.
Do the same for the constant e, the square root of 2,
as well as the square root of 1/2.
*/

// Ask Player Name.
function name(){ 
    let gamerName = prompt("Please enter your name", "Name of Gamer")
    if(gamerName == "Q" || gamerName == "Quit" || gamerName == "q" || gamerName == "quit" || gamerName == null){
        return false;
    } else {
        return gamerName;
    }
}

// Random Select Question.
function pickQuestions(){ 
    let questions = [
        [Math.PI,"what is the first 10-digits of PI"],
        [Math.E,"what is the first 10-digits of the constant e?"],
        [Math.sqrt(2),"what is the first 10-digits for the square root of 2?"]
        [Math.sqrt(0.5),"what is the first 10-digits for the square root of 1/2 except the first zero digits?"]
    ];
    let question = questions[Math.floor(Math.random()*4)];
    return question;
}

// Get Answers.
function getDigit(num){
    let number = num[0];
    let stringAnsKey = "";
    let first = Math.floor(number%10)
    if(first > 0){
      stringAnsKey+=first;
      for(let i = 2; i <= 10; i++){
        number*=10;
        stringAnsKey+=Math.floor(number%10);
      }
      return stringAnsKey;
    } else {
      for(let i = 1; i <= 10; i++){
        number*=10;
        let numberCheck = Math.floor(number%10);
        if(numberCheck > 0){
          stringAnsKey+=numberCheck;
        } else {
          if(stringAnsKey.length >= 0){
            stringAnsKey+=numberCheck;
          } else {
            i = 1;
          }
        }
      }
      return stringAnsKey;
    }
}

// Play Game.
function startGame(){
    let gameInfo = []; 
    let gamerName = name();
    if(gamerName === "") {
        return "Player has no name!";
    } else if(gamerName === false){
        return "Player quits!";
    } else {
        gameInfo.push("Gamer Name: " + gamerName);
        let answerQuestion = pickQuestions();
        let correctAnswer = getDigit(answerQuestion);
        let answer = prompt(gamerName + ", " + answerQuestion[1]);
        if(correctAnswer == answer){
            gameInfo.push(` You are correct! Your Answer: ${answer}, Correct Answer: ${correctAnswer}`);
        } else {
            gameInfo.push(` You are wrong! Your Answer: ${answer}, Correct Answer: ${correctAnswer}`);
        }
    }
    return gameInfo;
}
console.log("Result = " + startGame());

