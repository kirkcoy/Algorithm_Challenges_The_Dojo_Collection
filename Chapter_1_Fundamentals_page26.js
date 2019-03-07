/*
Weekend Challenge: Fundamentals
Create a fill-in-the blank quiz game. Ask the users's name, 
then refer to the user by name as you ask him/her a series of 
questions that you have stored in an array. Use the prompt() 
function to get each input from the user and compare it to the 
answer you expected. When the user enters "Q" (for quit), or 
perhaps when the user hits [Cancel], exit the game and prints 
the statistics of the game to the console: user name, number 
of questions answered and questions correct. 
*/

function name(){
  let gamerName = prompt("Please enter your name", "Name of Gamer")
  if(gamerName == "Q" || gamerName == "Quit" || gamerName == "q" || gamerName == "quit" || gamerName == null){
    return false;
  } else {
     return gamerName;
  }
}

function gamerQuestion(gamerName){
  let answeredCount = 0;
  let correctCount = 0;
  let result = [];
  let questionAnswer = [
    [" how many stars in Philippine flag?",3],
    [" what is the capital of the Philippines","Manila"],
    [" is the Philippines located in South-East Asia? (True or False)","True"]
  ]
  for(let i = 0; i<questionAnswer.length; i++){
    let answer = prompt(gamerName + questionAnswer[i][0]);
    if(answer == "Q" || answer == "Quit" || answer == "q" || answer == "quit" || answer == null){
      answeredCount++;
      result.push(answeredCount,correctCount);
      console.log('answers: '+answer);
      return result;
    } else if(answer == questionAnswer[i][1]){
      correctCount++; 
    }
    answeredCount++;
  }
  result.push(answeredCount,correctCount);
  return result;
}

function game(){
  let gameInfo = []; // name, question answered, question correct
  let gamerName = name();
  if(gamerName == false){
    console.log("Player quits!");
    return "Player quits!";
  } else {
    gameInfo.push("Gamer Name: " + gamerName);
    let gameResult = gamerQuestion(gamerName);
    gameInfo.push("Question Answered: " + gameResult[0],"Correct Answers : " + gameResult[1]);
    for(let info = 0; info<gameInfo.length; info++){
       console.log(gameInfo[info]);
    }
  }
  return gameInfo;
}
console.log("return : " , game());