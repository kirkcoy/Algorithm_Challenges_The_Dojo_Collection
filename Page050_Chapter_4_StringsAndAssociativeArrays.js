//// Remove Blanks.
function removeBlanks(str){
    let wordArray = str.split(" ");
    return wordArray.join("");
}
console.log(removeBlanks("  Pl  ay Tha    t F  u  nkyM   usi    c   "));

//// String: Get Digits.
function getDigits(str){
    let numStr = ""
    for(let i = 0; i < str.length; i++){
        switch(str[i]){
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              numStr += str[i];
        }
       console.log(i)
    }
    return numStr;
}
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

//// Acronyms.
function acronyms(str){
    let capitalizedStr = ""
    let wordArray = str.split(" ");
    console.log(wordArray)
    for(let i = 0; i < wordArray.length; i++){
        letterArray = wordArray[i].split("");
        if(letterArray[0] !== undefined){
            console.log(letterArray[0]);
            capitalizedStr += letterArray[0].toUpperCase();
        }
    }
    return capitalizedStr;
}
console.log(acronyms(" there's no free lunch - gotta pay yer way."));
console.log(acronyms("Live from New York, it's Saturday Night!"));

//// Count Non-Spaces.
function countNonSpaces(str){
    let count = 0;
    for(let i = 0; i <str.length; i++){
        if(str[i] != " "){
          count++; 
        }
    }
    return count;
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"));

//// Remove Shorter Strings.
function removeShorterString(str,length){
    let word = [];
    let wordArray = str.split(" ")
    for(let i = 0; i <wordArray.length; i++){
        if(wordArray[i].length >= length){
            word.push(wordArray[i]);
        }
    }
    return word;
}
console.log(removeShorterString("Honey pie, you are driving me crazy",5));

// Or.
function removeShorterString(strArray,length){
    for(let i = 0; i <strArray.length; i++){
        if(strArray[i].length < length){
            for(let j = i; j < strArray.length-1; j++){
                strArray[j] = strArray[j+1];
            }
            strArray.length--;
            i--;
        }
    }
    return strArray;
}
console.log(removeShorterString(["Honey", "pie", "you", "are", "driving", "me", "crazy"],5));
